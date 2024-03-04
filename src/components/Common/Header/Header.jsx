import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.scss'
import { logOut, selectIsUserData, selectUser } from '../../../store/slices/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => selectIsUserData(state));

  return (
    <header className={classes.header}>
      <h1>Id пользователя: {data.user_id}</h1>
      <button onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </header>
  )
}

export default Header;