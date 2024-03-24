import classes from "../DropdownMenu.module.scss";

const OptionButton = (props) => {
    const {children} = props;
  return (
        <button className={classes.dropdownOption} {...props} >{children}</button>
  )
}

export default OptionButton;