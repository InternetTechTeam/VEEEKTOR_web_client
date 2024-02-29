import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const PageContent = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default PageContent;