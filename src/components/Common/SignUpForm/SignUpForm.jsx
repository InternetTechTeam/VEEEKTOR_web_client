import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import SuccessSignUp from '../SuccessSignUp/SuccessSignUp';
import { useDispatch, useSelector } from 'react-redux';
import { selectFields } from '../../../store/slices/signUp/selectors/fieldsSelector';
import { setField } from '../../../store/slices/signUp/signUpSlice';
import { signUpUser } from '../../../store/slices/signUp/thunks';
import { selectSignUpStatus } from '../../../store/slices/signUp/selectors/statusSelector';
import { SIGN_UP_STATUS } from '../../../store/slices/signUp/sliceConfig';
import FullnameStage from './FullnameStage';
import PasswordStage from './PasswordStage';
import EnviromentsStage from './EnviromentsStage';

const MAX_STAGE = 2;
const MIN_STAGE = 0;

const SignUpForm = () => {

  const [stage, setStage] = useState(MIN_STAGE);

  const fields = useSelector(selectFields);
  const status = useSelector(selectSignUpStatus);
  const dispatch = useDispatch();

const onChange = (e) => {
    const {name, value} = e.target;
    dispatch(setField({name, value}));
  }

const stages = [
    <FullnameStage onChange={onChange} fields={fields}/>,
    <PasswordStage onChange={onChange} fields={fields}/>,
    <EnviromentsStage onChange={onChange} fields={fields}/>
 ]

  const onSendForm = (e) => {
    e.preventDefault();
    dispatch(signUpUser())
  }

  if(status === SIGN_UP_STATUS.LOADING) {
      return <Preloader/>
  };

  if(status === SIGN_UP_STATUS.SUCCESS) {
    return <SuccessSignUp email={fields.email} password={fields.password}/>
  }

  const nexStage = () => {
    if(stage !== MAX_STAGE) setStage(stage + 1);
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