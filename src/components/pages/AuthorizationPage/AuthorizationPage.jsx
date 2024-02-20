import React from 'react';
import classes from './AuthorizationPage.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const AuthorizationPage = () => {
  return (
    <div className={classes.authorization}>
      <div className={classes.content}>
        <form>
            <Input name='surname' type="text" placeholder='Фамилия'/>
            <Input name='name' type="text" placeholder='Имя'/>
            <Input name='patronymic' type="text" placeholder='Отчество'/>
            <Input name='mail' type="email" placeholder='Адрес почты'/>
            <Input name='pass' type="password" placeholder='Пароль'/>
            <Button>Зарегистрироваться</Button>
            {/* <a href="#" className={classes.forgot}>Забыли пароль?</a> */}
        </form>
      </div>
    </div>
  )
}

export default AuthorizationPage;