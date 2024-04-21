import React from 'react'
import Input from 'shared/ui/Input/Input';
import Error from 'shared/ui/Error/Error';

const FullnameStage = ({onChange, fields, errors}) => {
  return (
    <>
    <Error message={errors.surname}>
        <Input name='surname' type="text" placeholder='Фамилия' value={fields.surname} onChange={onChange}/>
    </Error>
    <Error message = {errors.name}>
      <Input name='name' type="text" placeholder='Имя' value={fields.name} onChange={onChange}/>
    </Error>
    <Error message={errors.patronymic}>
        <Input name='patronymic' type="text" placeholder='Отчество' value={fields.patronymic} onChange={onChange}/>
    </Error>
    </>
  )
}

export default FullnameStage;