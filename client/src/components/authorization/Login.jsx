import React from 'react';
import './authorization.scss'
import Input from '../../utils/input/Input';
import { useState } from 'react';
import {login} from '../../actions/user'
import {useDispatch} from 'react-redux'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch()

  return (
  <div className='authorization'>
    <div className='authorization__header'>Вход</div>
    <Input value = {email} setValue = {setEmail} text="Email" placeholder="Введите почту"/>
    <Input value = {password} setValue = {setPassword} text="Password" placeholder="Введите пароль"/>
    <button className='authorization__btn' onClick={()=>dispatch(login(email,password))}>Войти</button>
  </div>
  );
};

export default Login;