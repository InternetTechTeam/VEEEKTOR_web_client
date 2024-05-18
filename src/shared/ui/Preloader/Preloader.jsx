import React from 'react'
import loader from "shared/assets/icons/loader.svg";

const Preloader = ({isLoading, size}) => {
  return (
    isLoading 
    ?
      <img
      src={loader}
      alt="loader"
      style={{width: `${size || 100}px`, height: `${size || 100}px`}}
    />
    :
      null
  )
}

export default Preloader;