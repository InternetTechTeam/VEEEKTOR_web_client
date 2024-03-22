import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.scss'
import { selectIsUserData } from '../../../store/slices/authentication/selectors';
import { logout } from '../../../store/slices/authentication/thunks';

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectIsUserData);

  return (
    <header className={classes.header}>
      <h1>Id пользователя: {data.user_id}</h1>
      <button onClick={() => dispatch(logout())}>
        Выйти
      </button>
    </header>
  )
}

export default Header;