import Spinner from "../Spinner/Spinner";
import classes from "./PageLoader.module.scss";
const PageLoader = ({isLoading, children}) => {
  return (
    isLoading
    ?
    <div className={classes.PageLoader}>
        <Spinner/>
    </div>
    :
    children
  )
}

export default PageLoader