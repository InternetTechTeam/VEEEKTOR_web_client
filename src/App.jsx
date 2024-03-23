import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import Preloader from './components/Common/Preloader/Preloader';
import { useCheckAuth } from './hooks/useCheckAuth';
import { AUTH_STATUS } from './store/slices/authentication/constants';
import ScrollOnTop from './components/Common/ScrollOnTop/ScrollOnTop';

function App() {
    const {authStatus} = useCheckAuth();

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