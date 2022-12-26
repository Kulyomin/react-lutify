import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import "../library/library.css";
import { useNavigate } from "react-router-dom";
import apiClient from "../../spotify";

export default function Trending() {
   // Состояние плейлистов(playlist - плейлисты, setplaylist - назначить плейлист в массив playlist)
   
   const [newRelease, setNewRelease] = useState([]);

   // Передаем рекомундуемые плейлисты через UseEffect используя ID артиста
   useEffect(() => {
      // Рекомендуемы плейлисты для пользователя
      apiClient
         .get(`/browse/new-releases`)
         .then((res) => {
            const a = res.data?.albums.items.slice(0, 10);
            setNewRelease(a);
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
            {newRelease?.map((album) => (
               
               <div
                  className="playlist-card"
                  key={album.id}
                  onClick={() => playPlaylist(album.id)}
               >
                  
                  <img
                     src={album.images[0].url}
                     className="playlist-image"
                     alt="Playlist-Art"
                  />
                  <p className="playlist-title">{album.name}</p>
                  <p className="playlist-subtitle">{album.artists.name} Album</p>
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
