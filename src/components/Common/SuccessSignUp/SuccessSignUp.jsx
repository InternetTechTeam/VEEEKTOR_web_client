import React from 'react'
import Button from "../../UI/Button/Button";
import { useNavigate } from 'react-router-dom';

const SuccessSignUp = ({email, password}) => {
    const navigation = useNavigate();
    
    const click = () => {
        navigation("/sign_in", {state: {email, password}});
        console.log("fffff");
    }

  return (
    <div>
        Вы успешно зарегистрировались
        <Button onClick={click}>Войти </Button>
    </div>
  )
}

export default SuccessSignUp;