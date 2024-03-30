import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import Error from '../../UI/Error/Error';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthFields } from '../../../store/slices/authentication/selectors/authFieldsSelector';
import { selectAuthStatus } from '../../../store/slices/authentication/selectors/authStatusSelector';
import { setField, setInitialFields } from '../../../store/slices/authentication/authSlice';
import { signInUser } from '../../../store/slices/authentication/thunks';
import { useEffect } from 'react';

const SignInForm = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const fields = useSelector(selectAuthFields);
  const status = useSelector(selectAuthStatus);

  useEffect(() => {
    const signInData = location.state || {email: "", password: ""};
    dispatch(setInitialFields(signInData));
  }, [])

  const onChange = (e) => {
    const {name, value} = e.target;
    dispatch(setField({name, value}));
  }

  const onSendForm = (e) => {
    e.preventDefault();
    dispatch(signInUser());
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