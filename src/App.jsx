import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import { ACCESS_TOKEN_KEY, checkAuth } from './store/slices/authSlice';
import { useEffect } from 'react';
import CourseService from './API/CourseService';

function App() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(localStorage.getItem(ACCESS_TOKEN_KEY)) {
            dispatch(checkAuth());
        }
    }, [])

    const getCourses = async () => {
        const res = await CourseService.getAllCourses();
        console.log(res.data);
    }

    return (
    <div className="App">
        <AppRouter/>
        <button onClick={getCourses}>Дайте курсов</button>
    </div>
    );
}

export default App;