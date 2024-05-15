import { classNames } from "shared/lib/classNames/classNames"
import classes from "./NestedPagesEditingMode.module.scss"
import { NestedPageTypeTabs } from "widgets/NestedPageTypeTabs"

const NestedPagesEditingMode = () => {
  return (
    <div className={classNames(classes.NestedPagesEditingMode)}>
        <h3>Тип вложенности</h3>
        <NestedPageTypeTabs/>
    </div>
  )
}

export default NestedPagesEditingMode