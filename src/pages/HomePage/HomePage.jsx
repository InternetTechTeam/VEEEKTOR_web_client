import classes from './HomePage.module.scss'
import { useState } from 'react'

const HomePage = () => {
  const [text, setText] = useState("");
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