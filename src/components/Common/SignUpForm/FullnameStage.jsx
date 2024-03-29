import React from 'react'
import Input from '../../UI/Input/Input';

const FullnameStage = ({onChange, fields}) => {
  return (
    <>
        <Input name='name' type="text" placeholder='Имя' value={fields.name} onChange={onChange}/>
        <Input name='surname' type="text" placeholder='Фамилия' value={fields.surname} onChange={onChange}/>
        <Input name='patronymic' type="text" placeholder='Отчество' value={fields.patronymic} onChange={onChange}/>
    </>
  )
}

export default FullnameStage;