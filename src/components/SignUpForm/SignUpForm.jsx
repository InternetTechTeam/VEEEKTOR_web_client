import React from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
<div className="">
    <h1>Зарегистрироваться</h1>
    <form>
        <Input name='name' type="text" placeholder='Имя'/>
        <Input name='surname' type="text" placeholder='Фамилия'/>
        <Input name='patronymic' type="text" placeholder='Отчество'/>
        <Input name='mail' type="email" placeholder='Адрес почты'/>
        <Input name='pass' type="password" placeholder='Пароль'/>
        <Button>Зарегистрироваться</Button>
    </form>
    <div style={{display: 'flex'}}>
            <p style={{marginRight: '10px'}}>Уже зарегистрированы?</p>
            <Link to={'/'}>Войти</Link>
    </div>
</div>
  )
}

export default SignUpForm;