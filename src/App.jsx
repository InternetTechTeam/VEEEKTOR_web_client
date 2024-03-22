import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import { ACCESS_TOKEN_KEY, AUTH_STATUS, checkAuth } from './store/slices/authSlice';
import { useEffect } from 'react';
import CourseService from './API/CourseService';
import { useCourses } from './hooks/useCourses';
import Preloader from './components/Common/Preloader/Preloader';
import { useCheckAuth } from './hooks/useCheckAuth';

function App() {

    const {coursesStatus} = useCourses();
    const {authStatus} = useCheckAuth();

    return (
    <div className="App">
        {authStatus === AUTH_STATUS.CHECK
        ? <Preloader/>
        : <AppRouter/>
        }
    </div>
    );
}

export default App;