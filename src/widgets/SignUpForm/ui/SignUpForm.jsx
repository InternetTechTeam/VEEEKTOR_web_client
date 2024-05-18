import React, { useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { Link } from 'react-router-dom';
import Spinner from 'shared/ui/Spinner/Spinner';
import {SuccessSignUp} from 'widgets/SuccessSignUp';
import { useDispatch, useSelector } from 'react-redux';
import { selectFields } from 'app/store/slices/signUp/selectors/fieldsSelector';
import { setErrors, setField, validateFields } from 'app/store/slices/signUp/signUpSlice';
import { signUpUser } from 'app/store/slices/signUp/thunks';
import { selectSignUpStatus } from 'app/store/slices/signUp/selectors/statusSelector';
import { SIGN_UP_STATUS } from 'app/store/slices/signUp/sliceConfig';
import FullnameStage from './FullnameStage';
import PasswordStage from './PasswordStage';
import EnviromentsStage from './EnviromentsStage';
import { validate } from 'features/authentication';

const MAX_STAGE = 2;
const MIN_STAGE = 0;

const SignUpForm = () => {
  const [stage, setStage] = useState(MIN_STAGE);

  const {errors, ...fields} = useSelector(selectFields);
  const status = useSelector(selectSignUpStatus);
  const dispatch = useDispatch();

const onChange = (e) => {
    const {name, value} = e.target;
    dispatch(setField({name, value}));
}

const stages = [
    <FullnameStage onChange={onChange} fields={fields} errors={errors}/>,
    <PasswordStage onChange={onChange} fields={fields} errors={errors}/>,
    <EnviromentsStage onChange={onChange} fields={fields} errors={errors}/>
 ]

  const onSendForm = (e) => {
    e.preventDefault();
    if(validateStage()) {
      dispatch(signUpUser());
    }
  }

  const validateStage = () => {
    const {name, surname, patronymic, email, password, dep_id, env_id} = fields;
    let errors = {}
    switch(stage) {
      case 0: errors = validate({name, surname, patronymic});
      break;
      case 1: errors = validate({email, password});
      break;
      case 2: errors = validate({dep_id, env_id});
      break;
    }
    dispatch(setErrors(errors));

    return Object.keys(errors).length === 0;
  }

  if(status === SIGN_UP_STATUS.LOADING) {
      return <Spinner/>
  };

  if(status === SIGN_UP_STATUS.SUCCESS) {
    return <SuccessSignUp email={fields.email} password={fields.password}/>
  }

  const nexStage = () => {
    if(stage !== MAX_STAGE && validateStage()) {
          setStage(stage + 1);
    };
  }

  const prevStage = () => {
    if(stage !== MIN_STAGE) setStage(stage - 1);
  }

  return (
<div className="">
    <h1>Зарегистрироваться</h1>
    <form onSubmit={onSendForm}>
      {stages[stage]}
      <Button disabled={stage !== MAX_STAGE}>Зарегистрироваться</Button>
    </form>
    <Button disabled={stage === MIN_STAGE} onClick={prevStage}>Назад</Button>
    <Button disabled={stage === MAX_STAGE} onClick={nexStage}>Далее</Button>
    <div style={{display: 'flex'}}>
            <p style={{marginRight: '10px'}}>Уже зарегистрированы?</p>
            <Link to={'/'}>Войти</Link>
    </div>
</div>
  )
}

export default SignUpForm;