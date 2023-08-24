import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './test';
import UserCabinet from './user';
import OrderForm from './form_order.tsx';
import MainPage from './main';
import QandA from './qanda';
const Header = () => {
  return(
  <>
      <ul className="nav nav-pills nav-fill main-color display-6">
        <Link className="nav-link link-light d-flex align-items-center" to="/">TestName</Link>
        <nav className="navbar navbar-dark">
          <button className="btn btn-outline-secondary d-flex btn-lg" data-bs-toggle="collapse" data-bs-target="#header-navbar">
          <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </ul>
      <div id="header-navbar" className="collapse">
      <ul className="row nav nav-pills nav-fill main-color display-5 header-menu">
        <li className="col-12 col-sm-4 nav-item">
          <Link className="nav-link link-light h3" to="/profile">Личный кабинет</Link>
        </li>
        <li className="col-12 col-sm-4 nav-item">
          <Link className="nav-link link-light h3" to="/orders">Мои заказы</Link>
        </li>
        <li className="col-12 col-sm-4 nav-item">
          <Link className="nav-link link-light h3" to="/qanda">Тех. Поддержка</Link>
        </li>
      </ul>
      </div>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/orders' element={<Main />}/>
        <Route path='/profile' element={<UserCabinet />}/>
        <Route path='/qanda' element={<QandA />}/>
        <Route path='/form' element={<OrderForm />}/>
      </Routes>
    </>
  );
}
export default Header;