import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import { signInUser } from '../../../store/slices/authentication/thunks';
import { useAuthentication } from '../../../hooks/useAuthentication';
import Error from '../../UI/Error/Error';

const SignInForm = () => {

  const location = useLocation();
  const {fields, onFieldChange, onSendForm, status} = useAuthentication({
    email: location.state?.email || '',
    password: location.state?.password || ''
  }, signInUser);

  const onChange = (e) => {
    onFieldChange(e.target.name, e.target.value);
  }

  return (
    <div>
        <h1>Войти</h1>
        <form onSubmit={onSendForm}>
            <Input
            name='email'
            type="email"
            placeholder='Адрес почты'
            value={fields.email}
            onChange={onChange}
            />
            <Input name='password' type="password" placeholder='Пароль' value={fields.password} onChange={onChange}/>
            <Error></Error>
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