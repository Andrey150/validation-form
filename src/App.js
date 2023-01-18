import React from "react";
import { useForm } from "react-hook-form";
import './App.css';


export default function App() {
  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    reset
  } = useForm({mode: 'onBlur'});
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset();
  }

  return (
    <div className='App'>
      <h1>React hook form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name: &nbsp;
          {/*
            firstName имя поля,
            required: true - сделать поле обязательным
            required: 'текст ошибки'
          */}
          <input type="text" {...register('firstName',  {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 4,
              message: "Минимальное значение 4 символа",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Имя должно состоять только из букв'
            }
          })}/>
        </label>
        <div style={{height: 40}}>
         {errors?.firstName && <p>{errors?.firstName?.message || 'Заполните поле'}</p>}
        </div>
        <label>
          Last Name: &nbsp;
          <input type="text" {...register('lastName',  {
            required: "Поле обязательно к заполнению",
            minLength: {
              value: 4,
              message: "Минимальное значение 4 символа",
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'Имя должно состоять только из букв'
            }
          })}/>
        </label>
        <div style={{height: 40}}>
          {errors?.lastName && <p>{errors?.lastName?.message || 'Заполните поле'}</p>}
        </div>
        {/*Можно выбирать валидацию с выводом текста ошибки, так и без*/}
        <label>
          Age: &nbsp;
          <input type="number" {...register("age", {
            min: {
              value: 18,
              message: 'Вы должны быть старше 18 лет'
            },
            max: 99,
          })} />
        </label>
        <div style={{height: 40}}>
          {errors?.age && <p>{errors?.age?.message || 'Заполните поле'}</p>}
        </div>
        {/*
          отправка формы
        */}
        <input type="submit" disabled={!isValid}/>
      </form>
    </div>
  );
}