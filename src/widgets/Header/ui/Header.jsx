import {useSelector } from 'react-redux';
import classes from './Header.module.scss';

import logo from "shared/assets/icons/logo.svg";
import avatar from "shared/assets/icons/avatar.svg";
import notifications from "shared/assets/icons/notifications.svg";
import more from "shared/assets/icons/more.svg"

import { selectUserData } from 'app/store/slices/user/selectors/userDataSelector';
import { Link } from 'react-router-dom';
import {HeaderMenu} from 'widgets/HeaderMenu';

const Header = () => {
  const userData = useSelector(selectUserData);
  return (
    <header className={classes.header}>
      <Link to={"/"} className={classes.logoWrapper}>
        <img className={classes.logo} src={logo} alt="logo"/>
        <p className={classes.logoName}>VEEEKTOR</p>
      </Link>
      <div className={classes.userWrapper}>
        <img className={classes.userNotifications} src={notifications} alt="notifications"/>
        <p className={classes.userName}>{userData.name} {userData.surname}</p>
        <img className={classes.userAvatar} src={avatar} alt="avatar"/>
        <HeaderMenu>
          <img className={classes.more} src={more} alt="more"/>
        </HeaderMenu>
      </div>
    </header>
  )
}

export default Header;