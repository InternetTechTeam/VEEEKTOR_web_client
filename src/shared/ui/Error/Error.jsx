import React from 'react'
import classes from "./Error.module.scss"

const Error = ({children, message}) => {
  return (
    <>
        {children}
        {message
        ?
            <div className={classes.message}>
                {message}
            </div>
        :
        null
    }

    </>
  )
}

export default Error;