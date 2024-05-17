import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import classes from "./CoursePropertiesEditingMode.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { selectEditingCourse } from 'app/store/slices/courseEditing/selectors/selectEditingCourse';
import { setErrors, setField } from 'app/store/slices/courseEditing/courseEditingSlice';
import { validate } from 'features/authentication';
import { ValidationRules } from 'features/authentication/lib/validation';
import Error from 'shared/ui/Error/Error';
import Input from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import { selectEditingValidationErrors } from 'app/store/slices/courseEditing/selectors/selectEditingValidationErrors';
import { updateCourse } from 'app/store/thunks/courses/updateCourse';
import { selectEditingStatus } from 'app/store/slices/courseEditing/selectors/selectEditingStatus';
import Loading from 'shared/ui/Loading/Loading';
import { STATUS } from 'app/store/slices/config';

const CoursePropertiesEditingMode = () => {

  const dispatch = useDispatch();
  const courseData = useSelector(selectEditingCourse);
  const errors = useSelector(selectEditingValidationErrors);
  const status = useSelector(selectEditingStatus);

  const onChange = (e) => {
    const {name, value} = e.target;
      dispatch(setField({name, value}));
    }

    const onSendForm = (e) => {
        e.preventDefault();
        if(validateFields()) {
            dispatch(updateCourse());
        }
    }
    
    const validateFields = () => {
        const {name, term} = courseData;
        const errors = validate({name, term}, ValidationRules.COURSE);
        dispatch(setErrors(errors));
        return Object.keys(errors).length === 0;
    }

  return (
    <div className={classNames(classes.CoursePropertiesEditingMode)}>
      <Loading isLoading={status === STATUS.LOADING}>
        <form onSubmit={onSendForm} className={classNames(classes.CourseCreationForm)}>
            <div>
                <label htmlFor="name">Название курса:</label>
                <Error message={errors.name}>
                    <Input type="text" name="name" id="name" value={courseData.name} onChange={onChange}/>
                </Error>
            </div>
            <div>
                <label htmlFor="term">Семестр:</label>
                <Error message={errors.term}>
                    <Input type="text" name="term" id="term" value={courseData.term} onChange={onChange}/>
                </Error>
            </div>
            <Button>Сохранить</Button>
        </form>
      </Loading>
    </div>
  )
}

export default CoursePropertiesEditingMode