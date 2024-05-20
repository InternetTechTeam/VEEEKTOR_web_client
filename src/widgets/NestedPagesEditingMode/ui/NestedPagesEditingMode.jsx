import { classNames } from "shared/lib/classNames/classNames"
import classes from "./NestedPagesEditingMode.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import PageLoader from "shared/ui/PageLoader/PageLoader"
import { selectNestedStatus } from "app/store/slices/nestedPages/selectors"
import { STATUS } from "app/store/slices/config"
import { getAllNestedPages } from "app/store/thunks/nested/lib/all/getAllNestedPages"
import NestedPageTypeTabs from "./NestedPageTypeTabs"

const NestedPagesEditingMode = () => {

  const dispatch = useDispatch();
  const status = useSelector(selectNestedStatus);
  
  useEffect(() => {
    dispatch(getAllNestedPages());
  }, []);

  return (
    <div className={classNames(classes.NestedPagesEditingMode)}>
        <h3>Тип вложенности</h3>
        <PageLoader isLoading={status === STATUS.LOADING}>
          <NestedPageTypeTabs/>
        </PageLoader>
    </div>
  )
}

export default NestedPagesEditingMode