import React from 'react';
import './authorization.scss'
import Input from '../../utils/input/Input';
import { useState } from 'react';
import { registration } from '../../actions/user';

const Registration = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  

  return (
  <div className='authorization'>
    <div className='authorization__header'>Регистрация</div>
    <Input value = {email} setValue = {setEmail} text="Email" placeholder="Введите почту"/>
    <Input value = {password} setValue = {setPassword} text="Password" placeholder="Введите пароль"/>
    <button className='authorization__btn' onClick={()=>registration(email,password)}>Зарегироваться</button>
  </div>
  );
};

export default Registration;