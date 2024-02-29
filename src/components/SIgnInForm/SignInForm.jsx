import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/slices/userSlice';

const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSendForm = (e) => {
    e.preventDefault();
    dispatch(signIn({}))
    setEmail('');
    setPassword('');
  }

  return (
    <div>
        <h1>Войти</h1>
        <form onSubmit={onSendForm}>
            <Input name='mail' type="email" placeholder='Адрес почты' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input name='pass' type="password" placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button>Войти</Button>
        </form>
        <div style={{display: 'flex'}}>
                <p style={{marginRight: '10px'}}>Впервые на сайте?</p>
                <Link to={'/sign_up'}>Зарегистрироваться</Link>
        </div>
    </div>

  )
}

export default SignInForm;