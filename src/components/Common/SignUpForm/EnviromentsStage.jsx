import React, { useEffect } from 'react'
import Select from '../../UI/Select/Select';
import { useDispatch, useSelector } from 'react-redux';
import { selectEnvOptions } from '../../../store/slices/signUp/selectors/envOptionsSelector';
import { getDepartments, getEnviroments } from '../../../store/slices/signUp/thunks';
import { selestDepOptions } from '../../../store/slices/signUp/selectors/depOptionsSelestor';
import Error from '../../UI/Error/Error';

const EnviromentsStage = ({onChange, fields, errors}) => {

  const dispatch = useDispatch();
  const envOptions = useSelector(selectEnvOptions);
  const depOptions = useSelector(selestDepOptions);

  useEffect(() => {
    dispatch(getEnviroments());
  }, []);

  const onEnvChange = (e) => {
    onChange(e);
    dispatch(getDepartments())
  }

  return (
    <>
    <Error message={errors.env_id}>
      <Select
        disabled={envOptions.length === 0}
        name={"env_id"}
        onChange={onEnvChange}
        value={fields.env_id}
        defaultValue={"Образовательная среда"}
        options={envOptions}
      />
    </Error>
    <Error message={errors.dep_id}>
      <Select
      disabled={depOptions.length === 0}
      name={"dep_id"}
      onChange={onChange}
      value={fields.dep_id}
      defaultValue={"Кафедра"}
      options={depOptions}
    />
    </Error>
    </>
  )
}

export default EnviromentsStage;