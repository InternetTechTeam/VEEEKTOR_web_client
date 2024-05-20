import { STATUS } from 'app/store/slices/config';
import { selectTestData, selectTestStatus } from 'app/store/slices/test/selectors';
import { getTestById } from 'app/store/thunks/nested/lib/tests/getTestById';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import PageLoader from 'shared/ui/PageLoader/PageLoader';

const TestPage = () => {

    const {test_id} = useParams();
    const dispatch = useDispatch();
    const status = useSelector(selectTestStatus);
    const test = useSelector(selectTestData);
    
    useEffect(() => {
      dispatch(getTestById(test_id));
    },[test_id]);

  return (
    <div className={classNames("", {}, ["page"])}>
    <PageLoader isLoading={status === STATUS.LOADING}>
        {test?.topic}
    </PageLoader>
  </div>
  )
}

export default TestPage