import React, { useEffect, useRef, useState } from 'react';
import classes from "./DropdownMenu.module.scss";

const DropdownMenu = ({children, options}) => {

    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef();

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const body = document.querySelector('body');
        const onClickHandler = (e) => {
            if(e.target !== ref.current) {
                closeMenu();
            }
        }
        const onKeydownHandler = (e) => {
            if(e.code === 'Escape') {
                closeMenu();
            }
        }

        body.addEventListener('click', onClickHandler);
        body.addEventListener('keydown', onKeydownHandler);

        return () => {
            body.removeEventListener('click', onClickHandler);
            body.removeEventListener('keydown', onKeydownHandler);
        }
    }, []);

  return (
    <div ref={ref} className={classes.dropdown}>
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