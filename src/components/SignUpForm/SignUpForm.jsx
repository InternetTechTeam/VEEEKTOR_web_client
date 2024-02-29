import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/slices/userSlice';

const SignUpForm = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSendForm = (e) => {
    e.preventDefault();
    dispatch(signIn({}))
    setName('');
    setSurname('');
    setPatronymic('');
    setEmail('');
    setPassword('');
  }

  return (
<div className="">
    <h1>Зарегистрироваться</h1>
    <form onSubmit={onSendForm}>
        <Input name='name' type="text" placeholder='Имя' value={name} onChange={e => setName(e.target.value)}/>
        <Input name='surname' type="text" placeholder='Фамилия' value={surname} onChange={e => setSurname(e.target.value)}/>
        <Input name='patronymic' type="text" placeholder='Отчество' value={patronymic} onChange={e => setPatronymic(e.target.value)}/>
        <Input name='email' type="email" placeholder='Адрес почты'value={email} onChange={e => setEmail(e.target.value)}/>
        <Input name='pass' type="password" placeholder='Пароль'value={password} onChange={e => setPassword(e.target.value)}/>
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