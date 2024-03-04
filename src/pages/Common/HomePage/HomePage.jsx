import { useSelector } from 'react-redux'
import classes from './HomePage.module.scss'
import { useState } from 'react'
import { selectUser } from '../../../store/slices/userSlice';

const HomePage = () => {
  return (

    <div className={classes.home}>
         <div className={classes.sidebar}>
            sidebar
        </div>
        <div className={classes.main}>

        </div>
    </div>
  )
}

export default HomePage;