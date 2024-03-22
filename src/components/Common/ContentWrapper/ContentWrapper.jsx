import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const ContentWrapper = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default ContentWrapper;