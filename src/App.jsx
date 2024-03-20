import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import { checkAuth } from './store/slices/userSlice';
import { useEffect } from 'react';
import AuthService from './API/AuthService';

function App() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(checkAuth());
            console.log(AuthService.isTokenExpired(0));
        }
    }, [])

    return (
    <div className="App">
        <AppRouter/>
    </div>
    );
}

export default App;