import { Link } from 'react-router-dom';
import classes from './Footer.module.scss'
import { useDispatch } from 'react-redux';
import {logout} from "app/store/slices/authentication/thunks"
const Footer = () => {
  const dispatch = useDispatch();

  return (
    <footer className={classes.footer}>
      <Link className={classes.Link} to = "/">&gt; В начало</Link>
      <Link className={classes.Link} to = "/">&gt; Скачать мобильное приложение</Link>
      <button className={classes.logout} onClick={() => dispatch(logout())}>&gt; Выйти</button>
    </footer>
  )
}

export default Footer;