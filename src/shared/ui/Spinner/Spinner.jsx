import React from 'react'
import spinner from "shared/assets/icons/loader.svg";

const Spinner = ({size}) => {
  return (
      <img
      src={spinner}
      alt="loader"
      style={{width: `${size || 100}px`, height: `${size || 100}px`}}
    />
  )
}

export default Spinner;