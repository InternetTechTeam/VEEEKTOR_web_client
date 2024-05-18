import Spinner from "../Spinner/Spinner"

const Loader = ({isLoading, size}) => {
  return (
    isLoading 
    ?
    <Spinner size={size}/>
    :
    null
  )
}

export default Loader