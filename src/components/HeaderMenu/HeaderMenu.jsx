import { useDispatch } from "react-redux"
import { logout } from "../../store/slices/authentication/thunks";
import DropdownMenu from "../UI/DropdownMenu/DropdownMenu";
import Option from "../UI/DropdownMenu/Options/Option";
import OptionButton from "../UI/DropdownMenu/Options/OptionButton";
import Divider from "../UI/DropdownMenu/Options/Divider";


const HeaderMenu = ({children}) => {
    const dispatch = useDispatch();
  return (
    <DropdownMenu options={[
        <Option to="/profile">Личный кабинет</Option>,
        <Option to="/">Оценки</Option>,
        <Option to="/">Сообщения</Option>,
        <Option to="/">Настройки</Option>,
        <Divider/>,
        <OptionButton onClick={() => dispatch(logout())}>Выйти</OptionButton>
      ]}>
      {children}
    </DropdownMenu>
  )
}

export default HeaderMenu