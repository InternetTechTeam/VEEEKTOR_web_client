import classes from "./NestedList.module.scss";
import { NestedItem, NewNestedItem } from 'widgets/NestedItem';

const NestedList = ({items, type}) => {

  return (
    <div className={classes.NestedList}>
        {items.map(item => <NestedItem type={type} key={item.id} item={item}/>)}
        <NewNestedItem/>
        
    </div>
  )
}

export default NestedList