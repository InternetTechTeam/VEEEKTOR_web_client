import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import { useCourses } from './hooks/useCourses';
import Preloader from './components/Common/Preloader/Preloader';
import { useCheckAuth } from './hooks/useCheckAuth';
import { AUTH_STATUS } from './store/slices/authentication/constants';

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