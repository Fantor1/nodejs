import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface OrderFormInterface{
  name: string,
  surname: string,
  username: string,
  email: string,
  service: string, 
  paymentType: string,
  cardName: string,
  cardNumber: number,
  cardDate: string,
  cardCVC: number
}

const OrderForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<OrderFormInterface>({
    defaultValues: {
      
    }
  });
  const SendError = () => (<><p className="text-danger m-0">Вы указали неверный параметр</p></>);
  // const isName = () => {
  //       if(data==="") return(<SendError/>)
  //   };
  const Submit: SubmitHandler<OrderFormInterface> = () => (<div className="text-success">Everything is okay</div>); 
  const Error: SubmitErrorHandler<OrderFormInterface> = () => (<SendError />);
  return(
  <>
    <Link to="/" className="btn btn-secondary btn-lg mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"></path>
      </svg>
    </Link>  
    <div className="container text-center d-flex justify-content-center">            
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3 pt-3">Форма покупки</h4>
          <form onSubmit={handleSubmit(Submit, Error)} className="needs-validation" noValidate>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">Имя {errors.name ? <SendError/> : ''}</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Имя" {...register('name', {required: true})}></input>
                        <div className="invalid-feedback">
                            Неверное имя.
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">Фамилия {errors.surname ? <SendError/> : ''}</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Фамилия" {...register('surname', {required: true})}></input>
                        <div className="invalid-feedback">
                            Неверная фамилия.
                        </div>
                    </div>

                    <div className="col-12">
                        <label htmlFor="username" className="form-label">Никнейм в телеграм {errors.username ? <SendError/> : ''}</label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">@</span>
                            <input type="text" className="form-control" id="username" placeholder="username" {...register('username', {required: true})}></input>
                        <div className="invalid-feedback">
                            Неверный никнейм.
                        </div>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className="form-label">Почта {errors.email ? <SendError/> : ''}<span className="text-muted">(Необязательно)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"{...register('email')}></input>
                        <div className="invalid-feedback">
                            Пожалуйста, введите действительную почту.
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label htmlFor="country" className="form-label">Выбери услугу... {errors.service ? <SendError/> : ''}</label>
                        <select className="form-select" id="country" {...register('service', {required: true})}>
                            <option value="">Выбрать...</option>
                            <option>Чат-бот 15$</option>
                            <option>Юзер-бот 20$</option>
                            <option>Чат+юзер-бот 30$</option>
                        </select>
                    </div>
                </div>

                <hr className="my-4"></hr>

                <h4 className="mb-3">Оплата</h4>

                <div className="my-3">
                    <div className="form-check">
                        <input id="credit" type="radio" className="form-check-input" {...register('paymentType')}></input>
                        <label className="form-check-label" htmlFor="credit">Кредитная карта {errors.paymentType ? <SendError/> : ''}</label>
                    </div>
                    <div className="form-check">
                        <input id="debit" type="radio" className="form-check-input" {...register('paymentType')}></input>
                        <label className="form-check-label" htmlFor="debit">Дебетовая карта {errors.paymentType ? <SendError/> : ''}</label>
                    </div>
                </div>

                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">Имя на карте {errors.cardName ? <SendError/> : ''}</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" {...register('cardName', {required: true})}></input>
                    <small className="text-muted">Имя и Фамилия</small>
                    <div className="invalid-feedback">
                      Имя карты не действительно.
                    </div>
                  </div>
                </div>      
                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">Номер кредитной карты {errors.cardNumber ? <SendError/> : ''}</label>
                  <input type="text" className="form-control" id="cc-number" placeholder="" {...register('cardNumber', {required: true})}></input>
                  <div className="invalid-feedback">
                    Номер кредитной карточки недействительный
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">Дата {errors.cardDate ? <SendError/> : ''}</label>
                  <input type="text" className="form-control" id="cc-expiration" placeholder="" {...register('cardDate', {required: true})}></input>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">CVC/CVV {errors.cardCVC ? <SendError/> : ''}</label>
                  <input type="text" className="form-control" id="cc-cvv" placeholder="" {...register('cardCVC', {required: true})}></input>
                </div>
              </div>

              <hr className="my-4"></hr>

              <button className="w-100 btn btn-outline-secondary btn-lg" type="submit">Отправить</button>
         </form>
       </div>
     </div>
     <hr className="my-4"></hr>
  </>);
};

export default OrderForm;