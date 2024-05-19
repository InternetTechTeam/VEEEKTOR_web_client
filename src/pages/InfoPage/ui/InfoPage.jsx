import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const InfoPage = () => {

  const {info_id} = useParams();
  const dispatch = useDispatch();

  return (
    <div>InfoPage</div>
  )
}

export default InfoPage;