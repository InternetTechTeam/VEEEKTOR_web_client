import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import { checkAuth } from './store/slices/userSlice';
import { useEffect } from 'react';

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(checkAuth())
        }
    }, [])

    return (
    <div className="App">
        <AppRouter/>
    </div>
    );
}

export default App;