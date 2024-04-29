import { useDispatch } from "react-redux"
import { logout } from "app/store/slices/authentication/thunks";
import DropdownMenu from "shared/ui/DropdownMenu/DropdownMenu";
import Option from "shared/ui/DropdownMenu/Options/Option";
import OptionButton from "shared/ui/DropdownMenu/Options/OptionButton";
import Divider from "shared/ui/DropdownMenu/Options/Divider";


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