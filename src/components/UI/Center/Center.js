import React from 'react'

const Center = ({children}) => {
  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: "center", height: `80vh`}}>
        {children}
    </div>
  )
}

export default Center;