import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "../library/library.css";
import { useNavigate } from "react-router-dom";
import apiClient from "../../spotify";

export default function Recomended() {
   // Состояние плейлистов(playlist - плейлисты, setplaylist - назначить плейлист в массив playlist)
   const [featured, setFeatured] = useState([]);

   // Передаем рекомундуемые плейлисты через UseEffect используя ID артиста
   useEffect(() => {
      // Рекомендуемы плейлисты для пользователя
      apiClient
         .get(`/browse/featured-playlists`)
         .then((res) => {
            const a = res.data?.playlists.items.slice(0, 10);
            setFeatured(a);
         })
         .catch((err) => console.error(err));
   }, []);

   // useNavigate - Хук навигации для перемещния между страницами
   const navigate = useNavigate();

   // Переадресация на плеер и запуск активного плейлиста
   const playPlaylist = (id) => {
      navigate("/player", { state: { id: id } });
   };

   return (
      <div className="screen-container">
         <div className="library-body">
            {featured?.map((playlist) => (
               <div
                  className="playlist-card"
                  key={playlist.id}
                  onClick={() => playPlaylist(playlist.id)}
               >
                  <img
                     src={playlist.images[0].url}
                     className="playlist-image"
                     alt="Playlist-Art"
                  />
                  <p className="playlist-title">{playlist.name}</p>
                  <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
                  <div className="playlist-fade">
                     <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                        <AiFillPlayCircle />
                     </IconContext.Provider>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}
