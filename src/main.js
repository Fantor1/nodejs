import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => (
    <>
       <div className="container">
        <div className="row pt-3 d-flex justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 panels-col-lg-3 col-lg-3 order-4 d-flex flex-column align-items-center justify-content-start panelShadow panelWidth panelOther ">
           <p className="mt-3 h3">Чат-бот</p>
           <Link className="btn btn-outline-secondary order-button m-3" to="/form">Заказать 30$</Link>
           <p className="text-break">Телеграм бот для модерации чата вашего телеграм канала, вы сможете персонально его настроить для максимально комфортной модерации</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 panels-col-lg-3 col-lg-3 order-4 d-flex flex-column align-items-center justify-content-start panelShadow panelWidth panelOther ">
            <p className="mt-3 h3">Чат+Юзер-бот</p> 
            <Link className="btn btn-outline-secondary order-button m-3" to="/form">Заказать 60$</Link>
            <p className="text-break">Телеграм бот, способный реализовывать свой функционал как и в чате, так и в личных сообщениях, область функционала также ничем не ограничивается</p>
          </div>
          <div className="col-12 col-sm-10 col-md-8 panels-col-lg-3 col-lg-3 order-4 d-flex flex-column align-items-center justify-content-start panelShadow panelWidth panelOther ">
           <p className="mt-3 h3">Юзер-бот</p> 
           <Link className="btn btn-outline-secondary order-button m-3" to="/form">Заказать 45$</Link>
           <p className="text-break">Телеграм бот, с которым пользователь общается через личные сообщения, здесь область функционала ограничивается только вашей фантазией и возможностями телеграма</p>
          </div>
        </div>
      </div>
     
    </>
);

export default MainPage;