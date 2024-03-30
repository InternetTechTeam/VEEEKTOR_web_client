import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import Preloader from './components/Common/Preloader/Preloader';
import { useCheckAuth } from './hooks/useCheckAuth';
import { AUTH_STATUS } from './store/slices/authentication/config';
import ScrollOnTop from './components/Common/ScrollOnTop/ScrollOnTop';
import { useUserInfo } from './hooks/useUserInfo';
import { STATUS } from './store/slices/config';

function App() {
    const {authStatus} = useCheckAuth();
    const {userStatus} = useUserInfo();

    return (
    <div className="App">
        {authStatus === AUTH_STATUS.CHECK
        ? <Preloader/>
        : <AppRouter/>
        }
        <ScrollOnTop/>
    </div>
    );
}

export default App;