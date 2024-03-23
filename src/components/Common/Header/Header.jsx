import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.scss';
import { selectIsUserData } from '../../../store/slices/authentication/selectors';

import logo from "../../../assets/icons/logo.svg";
import avatar from "../../../assets/icons/avatar.svg";
import notifications from "../../../assets/icons/notifications.svg";
import more from "../../../assets/icons/more.svg"

import { logout } from '../../../store/slices/authentication/thunks';
import DropdownMenu from '../../UI/DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';
import Option from '../../UI/DropdownMenu/Options/Option';
import OptionButton from '../../UI/DropdownMenu/Options/OptionButton';
import Divider from '../../UI/DropdownMenu/Options/Divider';

const Header = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectIsUserData);

  return (
    <header className={classes.header}>
      <div className={classes.logoWrapper}>
        <img className={classes.logo} src={logo} alt="logo"/>
        <p className={classes.logoName}>VEEEKTOR</p>
      </div>
      <div className={classes.userWrapper}>
        <img className={classes.userNotifications} src={notifications} alt="notifications"/>
        <p className={classes.userName}>id {data.user_id}</p>
        <img className={classes.userAvatar} src={avatar} alt="avatar"/>

        <DropdownMenu options={[
            <Option>Личный кабинет</Option>,
            <Option>Оценки</Option>,
            <Option>Сообщения</Option>,
            <Option>Настройки</Option>,
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