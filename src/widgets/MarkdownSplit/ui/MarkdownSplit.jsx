import React from 'react'
import classes from "./MarkdownSplit.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { MarkdownEditing } from 'widgets/MarkdownEditing';
import { MarkdownPreview } from 'widgets/MarkdownPreview';
import ButtonLoader from 'shared/ui/ButtonLoader/ButtonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from 'app/store/thunks/courses/updateCourse';
import { selectEditingStatus } from 'app/store/slices/courseEditing/selectors/selectEditingStatus';
import { STATUS } from 'app/store/slices/config';

const MarkdownSplit = () => {

  const dispatch = useDispatch();
  const status = useSelector(selectEditingStatus);

  const onSave = () => {
      dispatch(updateCourse());
  }

  return (
    <div className={classNames()}>
      <div className={classes.Split}>
        <MarkdownEditing/>
        <MarkdownPreview/>
      </div>
      <ButtonLoader
      onClick={onSave}
      isLoading={status === STATUS.LOADING}
      >Сохранить</ButtonLoader>
    </div>
  )
}

export default MarkdownSplit;