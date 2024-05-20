import { classNames } from "shared/lib/classNames/classNames";
import classes from "./NestedEditingTab.module.scss";

const NestedEditingTab = ({list}) => {
  return (
    <div className={classNames(classes.LabsEditingTab)}>
      {list}
    </div>
  )
}

export default NestedEditingTab;