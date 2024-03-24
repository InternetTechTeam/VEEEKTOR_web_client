import { Link } from 'react-router-dom';
import classes from "../DropdownMenu.module.scss";


const Option = (props) => {
    const {children} = props;
  return (
        <Link className={classes.dropdownOption} {...props} >{children}</Link>
  )
}

export default Option;