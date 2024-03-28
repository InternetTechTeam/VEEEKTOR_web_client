import React from 'react'
import Input from '../../UI/Input/Input'

const PasswordStage = ({onChange, fields}) => {
  return (
    <>
        <Input name='email' type="email" placeholder='Адрес почты'value={fields.email} onChange={onChange}/>
        <Input name='password' type="password" placeholder='Пароль'value={fields.password} onChange={onChange}/>
    </>
  )
}

export default PasswordStage