import React from 'react'
import Input from '../../UI/Input/Input'
import Error from '../../UI/Error/Error'

const PasswordStage = ({onChange, fields, errors}) => {
  return (
    <>
        <Error message={errors.email}>
          <Input name='email' type="email" placeholder='Адрес почты'value={fields.email} onChange={onChange}/>
        </Error>
        <Error message={errors.password}>
          <Input name='password' type="password" placeholder='Пароль'value={fields.password} onChange={onChange}/>
        </Error>
    </>
  )
}

export default PasswordStage