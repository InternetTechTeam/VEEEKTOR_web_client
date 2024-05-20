import React from 'react'
import { MarkdownViewTabs } from 'widgets/MarkdownViewTabs';
import classes from "./MainPageEditingMode.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import ButtonLoader from 'shared/ui/ButtonLoader/ButtonLoader';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse } from 'app/store/thunks/courses/updateCourse';
import { selectEditingStatus } from 'app/store/slices/courseEditing/selectors/selectEditingStatus';
import { STATUS } from 'app/store/slices/config';

const MainPageEditingMode = () => {

  const dispatch = useDispatch();
  const status = useSelector(selectEditingStatus);

  const onSave = () => {
      dispatch(updateCourse());
  }

  return (
    <div className={classNames(classes.MainPageEditingMode)}>
        <h3 className={classes.title}>Способ отображения</h3>
        <MarkdownViewTabs/>
        <ButtonLoader
      onClick={onSave}
      isLoading={status === STATUS.LOADING}
      >Сохранить</ButtonLoader>
    </div>
  )
}

export default MainPageEditingMode