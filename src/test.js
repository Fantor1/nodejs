import React from 'react';
import App from './App';

const orders = [
    {
      name: "Заказ 1",
      description: "Заказ за 12.07.2023",
      key: 1,
      price: "30$",
    },
    {
      name: "Заказ 2",
      description: "Заказ за 13.07.2023",
      key: 2,
      price: "120$",
    },
    {
      name: "Заказ 3",
      description: "Заказ за 14.07.2023",
      key: 3,
      price: "60$",
    }
  ];

class Main extends React.Component{
  constructor(){
    super();
    this.rows = [];
    this.orders = orders;
  }

  onRows(){
    for (let i = 0; i < orders.length; i++) {
      this.rows.push(
          <App {...this.orders[i]} />
        );
    }
    return(
    <div className="container">
      <div className="row pt-3 d-flex justify-content-center">
        {this.rows}
      </div> 
    </div>
    );
  }
  render(){
    return(this.onRows());
  }
}
export default Main;
