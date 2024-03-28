import React from 'react'
import Button from "../../UI/Button/Button";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearFields } from '../../../store/slices/signUp/signUpSlice';

const SuccessSignUp = ({email, password}) => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    
    const click = () => {
        navigation("/sign_in", {state: {email, password}});
        dispatch(clearFields());
    }

  return (
    <div>
        <h1>Вы успешно зарегистрировались</h1>
        <Button onClick={click}>Войти </Button>
    </div>
  )
}

export default SuccessSignUp;