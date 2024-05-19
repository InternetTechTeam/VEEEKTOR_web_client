import React from 'react'
import { Link } from 'react-router-dom';

const MdLink = ({props}) => {
    const {children, href} = props
  return (
    <Link to={href}>
    {children}
    </Link>
  )
}

export default MdLink;