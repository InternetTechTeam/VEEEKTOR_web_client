import { STATUS } from 'app/store/slices/config';
import { selectLabData, selectLabStatus } from 'app/store/slices/lab/selectors';
import { getLabById } from 'app/store/thunks/nested/lib/labs/getLabById';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import PageLoader from 'shared/ui/PageLoader/PageLoader';

const LabPage = () => {

  const {lab_id} = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectLabStatus);
  const lab = useSelector(selectLabData);

  useEffect(() => {
    dispatch(getLabById(lab_id));
  },[lab_id]);
  return (
    <div className={classNames("", {}, ["page"])}>
    <PageLoader isLoading={status === STATUS.LOADING}>
        {lab?.topic}
    </PageLoader>
  </div>
  )
}

export default LabPage;