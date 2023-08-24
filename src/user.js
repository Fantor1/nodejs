import React from "react";
import { Link } from "react-router-dom";
const UserCabinet = () => (
    <div className="row align-items-center pt-3 m-0">
            <div className="col-12 d-flex justify-content-center pb-2">
                <img className="img-fluid" width="200px" height="250px" src="avatar.png" alt="profile img"></img>
            </div>
            <div className="col-sm-6 col-12">
                <p className="text-sm-right h5">Profile name</p>
            </div>
            <div className="col-sm-6 col-12">
                <p className="text-sm-left h5">Second name</p>
            </div>
            <div className="col-sm-6 col-12 pt-2 text-sm-right">
                <p className="h5">email@gmail.com</p>
            </div>
            <div className="col-sm-6 col-12 pt-2 text-sm-left">
                <p className="h5">+380991112233</p>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-outline-secondary btn-sm" type="submit"><p className="h6 m-0">Изменить профиль</p></button>
            </div>
            <div className="col-12 d-flex justify-content-center p-3">
                <button className="btn btn-secondary btn-lg" type="submit"><Link className="nav-link link-light m-0 p-0" to="http://localhost:3000/orders">Мои заказы</Link></button>
            </div>
        </div>
);
export default UserCabinet;