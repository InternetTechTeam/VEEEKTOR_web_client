import React, { useState } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import { useAuthentication, useSignUp } from '../../../hooks/useAuthentication';
import Preloader from '../Preloader/Preloader';
import SuccessSignUp from '../SuccessSignUp/SuccessSignUp';
import { AUTH_STATUS } from '../../../store/slices/authentication/constants';
import { signUpUser } from '../../../store/slices/authentication/thunks';


const SignUpForm = () => {
  const {fields, onFieldChange, onSendForm, status} = useAuthentication({
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    password: ''
  }, signUpUser);
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    onFieldChange(e.target.name, e.target.value);
  }

  if(status === AUTH_STATUS.LOADING) {
      return <Preloader/>
  };

  if(status === AUTH_STATUS.SIGN_UP) {
    
    return <SuccessSignUp email={fields.email} password={fields.password}/>
  }

  return (
<div className="">
    <h1>Зарегистрироваться</h1>
    <form onSubmit={onSendForm}>
        <Input name='name' type="text" placeholder='Имя' value={fields.name} onChange={onChange}/>
        <Input name='surname' type="text" placeholder='Фамилия' value={fields.surname} onChange={onChange}/>
        <Input name='patronymic' type="text" placeholder='Отчество' value={fields.patronymic} onChange={onChange}/>
        <Input name='email' type="email" placeholder='Адрес почты'value={fields.email} onChange={onChange}/>
        <Input name='password' type={show ? "text" : "password"} placeholder='Пароль'value={fields.password} onChange={onChange}/>
        <div className="">
          <input id='show' type="checkbox" onClick={() => show ? setShow(false): setShow(true)}/>
          <label htmlFor="show">Показать пароль</label>
        </div>
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