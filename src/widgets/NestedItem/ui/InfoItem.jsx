import { AppRoutes, routesPath } from "shared/config/routeConfig";
import classes from "./NestedItem.module.scss";
import { dinamicRoute } from "shared/lib/dinamicRoute/dinamicRoute";
import edit from "shared/assets/images/pencil.png";
import del from "shared/assets/images/delete.png";
import { Link } from "react-router-dom";

const InfoItem = ({item}) => {
  return (
    <div className={classes.ItemWrapper}>
      <div className={classes.Item}>
          {item?.name}
      </div>
      <Link to={dinamicRoute(routesPath[AppRoutes.EDIT_LAB], item?.id)}>
        <img className={classes.edit} src={edit} alt="edit"/>
      </Link>
      <button className={classes.btn}>
        <img className={classes.delete} src={del} alt="delete" />
      </button>
    </div>
  )
}   

export default InfoItem;