import { Link } from "react-router-dom";
import classes from "./NestedItem.module.scss";


const NewNestedItem = () => {
  return (
  <Link className={classes.Item}>
    + Создать
  </Link>
  )
}

export default NewNestedItem;