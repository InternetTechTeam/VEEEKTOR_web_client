import classes from "./Select.module.scss"

const Select = (props) => {
  const {name , options, onChange, value, defaultValue, ...others} = props;
  return (
    <select
    {...others}
    className={classes.input}
    name={name}
    value={value}
    onChange={onChange}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map(option => {
            return <option value={option.value} key={option.value}>
                    {option.name}
                  </option>
        })}
    </select>
  )
}

export default Select;