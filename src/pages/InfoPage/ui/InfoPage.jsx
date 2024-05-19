import { STATUS } from "app/store/slices/config";
import { selectInfoData, selectInfoStatus } from "app/store/slices/info/selectors";
import { getInfoById } from "app/store/thunks/nested/lib/infos/getInfoById";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import MdContent from "shared/md/MdContent/MdContent";
import PageLoader from "shared/ui/PageLoader/PageLoader";

const InfoPage = () => {

  const {info_id} = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectInfoStatus);
  const info = useSelector(selectInfoData);

  useEffect(() => {
    dispatch(getInfoById(info_id));
  }, [info_id])
  return (
    <div className={classNames("", {}, ["page"])}>
      <PageLoader isLoading={status === STATUS.LOADING}>
        <MdContent content={info?.markdown}/>
      </PageLoader>
    </div>
  )
}

export default InfoPage;