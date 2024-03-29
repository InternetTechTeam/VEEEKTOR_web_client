import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.scss';

import logo from "../../../assets/icons/logo.svg";
import avatar from "../../../assets/icons/avatar.svg";
import notifications from "../../../assets/icons/notifications.svg";
import more from "../../../assets/icons/more.svg"

import { logout } from '../../../store/slices/authentication/thunks';
import DropdownMenu from '../../UI/DropdownMenu/DropdownMenu';
import Option from '../../UI/DropdownMenu/Options/Option';
import OptionButton from '../../UI/DropdownMenu/Options/OptionButton';
import Divider from '../../UI/DropdownMenu/Options/Divider';
import { selectUserData } from '../../../store/slices/user/selectors/userDataSelector';

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  return (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <img className={classes.logo} src={logo} alt="logo"/>
        <p className={classes.logoName}>VEEEKTOR</p>
      </div>
      <div className={classes.userWrapper}>
        <img className={classes.userNotifications} src={notifications} alt="notifications"/>
        <p className={classes.userName}>{userData.name} {userData.surname}</p>
        <img className={classes.userAvatar} src={avatar} alt="avatar"/>

        <DropdownMenu options={[
            <Option to="/profile">Личный кабинет</Option>,
            <Option to="/">Оценки</Option>,
            <Option to="/">Сообщения</Option>,
            <Option to="/">Настройки</Option>,
            <Divider/>,
            <OptionButton onClick={() => dispatch(logout())}>Выйти</OptionButton>
          ]}>
          <img className={classes.more} src={more} alt="more"/>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header;