import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  return (
    <div>
        <h1>Войти</h1>
        <form>
            <Input name='mail' type="email" placeholder='Адрес почты'/>
            <Input name='pass' type="password" placeholder='Пароль'/>
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