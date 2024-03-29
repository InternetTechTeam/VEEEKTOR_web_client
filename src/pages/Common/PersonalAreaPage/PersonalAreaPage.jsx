import { useSelector } from 'react-redux';
import { selectUserData } from '../../../store/slices/user/selectors/userDataSelector';
import classes from "./PersonalAreaPage.module.scss"

const PersonalAreaPage = () => {

    const userData = useSelector(selectUserData);

  return (
    <div className={classes.profile}>
        <h1 className={classes.title}>Личный кабинет</h1>
        <div className={classes.profileInfo}>
            <div className="">
                <h2 className={classes.title}>ФИО</h2>
                <h3>{userData.surname}</h3>
                <h3>{userData.name}</h3>
                <h3>{userData.patronymic}</h3>
            </div>
            <div className="">
                <h2 className={classes.title}>Образовательная среда</h2>
                <h3>{userData.enviroment.name}</h3>
                <h3>Кафедра {userData.department.name}</h3>
            </div>
            <div className="">
                <h2 className={classes.title}>Статус</h2>
                <h3>{userData.role_id}</h3>
            </div>
        </div>
    </div>

  )
}

export default PersonalAreaPage;