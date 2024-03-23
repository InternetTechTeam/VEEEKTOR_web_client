import { Link } from 'react-router-dom';
import classes from './Footer.module.scss'
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/slices/authentication/thunks';
const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className={classes.footer}>
      <Link style={{display: 'block'}} to = "/">В начало</Link>
      <button className={classes.logout} onClick={() => dispatch(logout())}>Выйти</button>
    </footer>
  )
}

export default Footer;