import React, { useState } from 'react';
import classes from "./DropdownMenu.module.scss";

const DropdownMenu = ({children, options}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className={classes.dropdown}>
        <button className={classes.dropdownToggle} onClick={toggleMenu}>
            {children}
        </button>
        {isOpen
            ?
            <div className={classes.dropdownMenu}>
                {options}
            </div>
            : null
        }

    </div>
  )
}

export default DropdownMenu;