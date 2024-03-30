import {useSelector } from 'react-redux';
import classes from './Header.module.scss';

import logo from "../../../assets/icons/logo.svg";
import avatar from "../../../assets/icons/avatar.svg";
import notifications from "../../../assets/icons/notifications.svg";
import more from "../../../assets/icons/more.svg"

import { selectUserData } from '../../../store/slices/user/selectors/userDataSelector';
import { Link } from 'react-router-dom';
import HeaderMenu from '../../HeaderMenu/HeaderMenu';

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