import React, { useEffect } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import classes from "./CourseCreationForm.module.scss";
import Input from "shared/ui/Input/Input";
import { useDispatch, useSelector } from 'react-redux';
import { selectCourseData } from 'app/store/slices/newCourse/selectors/courseDataSelector';
import { clearFields, setErrors, setField, setId } from 'app/store/slices/newCourse/courseCreationSlice';
import { validate } from 'features/authentication';
import { ValidationRules } from 'features/authentication/lib/validation';
import { selectUserData } from 'app/store/slices/user/selectors/userDataSelector';
import Button from 'shared/ui/Button/Button';
import { createCourse } from 'app/store/slices/newCourse/thunks';
import Error from 'shared/ui/Error/Error';


const CourseCreationForm = () => {

    const dispatch = useDispatch();
    const {errors, ...courseData} = useSelector(selectCourseData);
    const {id: teacher_id, department: {id : dep_id}} = useSelector(selectUserData);

useEffect(() => {
    dispatch(setId({teacher_id, dep_id}));
}, [courseData]);

const onChange = (e) => {
    const {name, value} = e.target;
    dispatch(setField({name, value}));
    }

const onSendForm = (e) => {
    e.preventDefault();
    if(validateFields()) {
        dispatch(createCourse());
    }
}

const validateFields = () => {
    const {name, term, teacher_id, dep_id} = courseData;

    const errors  = validate({name, term, teacher_id, dep_id}, ValidationRules.COURSE);
    dispatch(setErrors(errors));

    return Object.keys(errors).length === 0;
}

  return (
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
        <Button>Создать</Button>
    </form>
  )
}

export default CourseCreationForm;