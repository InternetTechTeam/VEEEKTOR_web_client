import Input from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import Error from 'shared/ui/Error/Error';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthFields } from 'app/store/slices/authentication/selectors/authFieldsSelector';
import { selectAuthStatus } from 'app/store/slices/authentication/selectors/authStatusSelector';
import { setErrors, setField, setInitialFields } from 'app/store/slices/authentication/authSlice';
import { signInUser } from 'app/store/slices/authentication/thunks';
import { useEffect } from 'react';
import { validate } from 'features/authentication';

const SignInForm = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const {errors, ...fields} = useSelector(selectAuthFields);
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
    const {email, password} = fields;
    const errors = validate({email, password});
    dispatch(setErrors(errors));

    if(Object.keys(errors).length === 0) {
        dispatch(signInUser());
    }
  }

  return (
    <div>
        <h1>Войти</h1>
        <form onSubmit={onSendForm}>
            <Error message={errors.email}>
              <Input
              name='email'
              type="email"
              placeholder='Адрес почты'
              value={fields.email}
              onChange={onChange}
              />
            </Error>
            <Error message={errors.password}>
              <Input name='password' type="password" placeholder='Пароль' value={fields.password} onChange={onChange}/>
            </Error>
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