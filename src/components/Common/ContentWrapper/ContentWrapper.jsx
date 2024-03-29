import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './ContentWrapper.module.scss';

const ContentWrapper = ({children}) => {
  return (
    <>
    <Header/>
    <div className={classes.contentWrapper}>
         <div className={classes.sidebar}>
            sidebar
        </div>
        <div className={classes.content}>
          {children}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContentWrapper;