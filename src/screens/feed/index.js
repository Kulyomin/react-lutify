import React from "react";
import "./style.css";
import github from "../../assets/github_icon.png";

export default function Feed() {
   return (
      <div className="screen-container">
         <div className="feed-container">
            <h1 className="feed-title">Lutify</h1>
            <p className="feed-subtitle">Добро пожаловать на наш музыкальный сервис</p>

            <div className="about-container">
               <h2 className="about-description">
               Our music service was created for special requirements, complete relaxation and alienation from everyday problems.
               </h2>
            </div>

            <div className="developers-container">
               <h3 className="developers-title">Project developers</h3>
               <ul className="developers-list">
                  <li className="list-item">
                     <img className="item-img" src={github} alt="github_icon" />
                     <p className="item-name">Kulyomin Evgenii<br />Кулёмин Евгений</p>
                  </li>
                  <li className="list-item">
                     <img className="item-img" src={github} alt="github_icon" />
                     <p className="item-name">Daria Akimova<br />Дарья Акимова</p>
                  </li>
                  <li className="list-item">
                     <img className="item-img" src={github} alt="github_icon" />
                     <p className="item-name">Sergaliev Amir<br />Сергалиев Амир</p>
                  </li>
                  <li className="list-item">
                     <img className="item-img" src={github} alt="github_icon" />
                     <p className="item-name">Ryabova Ekaterina<br />Рябова Екатерина</p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}