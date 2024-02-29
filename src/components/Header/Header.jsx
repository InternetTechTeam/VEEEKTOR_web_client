import { useDispatch } from 'react-redux';
import classes from './Header.module.scss'
import { logOut } from '../../store/slices/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className={classes.header}>
      <button onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </header>
  )
}

export default Header;