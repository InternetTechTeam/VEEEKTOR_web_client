import { selectEditingCourse } from 'app/store/slices/courseEditing/selectors/selectEditingCourse';
import React from 'react'
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import MdContent from 'shared/md/MdContent/MdContent';
import classes from "./MarkdownPreview.module.scss"

const MarkdownPreview = () => {

  const {markdown} = useSelector(selectEditingCourse);

  return (
    <div className={classNames(classes.MarkdownPreview)}>
      <MdContent content={markdown}/>
    </div>
  )
}

export default MarkdownPreview;