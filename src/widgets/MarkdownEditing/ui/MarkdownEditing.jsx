import { setField } from 'app/store/slices/courseEditing/courseEditingSlice';
import { selectEditingCourse } from 'app/store/slices/courseEditing/selectors/selectEditingCourse';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from "./MarkdownEditing.module.scss";

const MarkdownEditing = () => {

  const {markdown} = useSelector(selectEditingCourse);
  const dispatch = useDispatch();

  const onChange = (e) => {
    let {name, value} = e.target;
      dispatch(setField({name, value}));
   }

  return (
    <div className={classNames(classes.MarkdownEditing)}>
    <textarea name='markdown' className={classes.MdField} value={markdown} onChange={onChange}/>
  </div>
  )
}

export default MarkdownEditing;