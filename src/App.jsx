import './App.scss';
import AppRouter from './components/Common/AppRouter/AppRouter';
import { useCheckAuth } from './hooks/useCheckAuth';
import { AUTH_STATUS } from './store/slices/authentication/config';
import ScrollOnTop from './components/Common/ScrollOnTop/ScrollOnTop';
import { useUserInfo } from './hooks/useUserInfo';
import Loading from './components/UI/Loading/Loading';

function App() {
    const {authStatus} = useCheckAuth();
    const {userStatus} = useUserInfo();

    return (
    <div className="App">
        <Loading isLoading={authStatus === AUTH_STATUS.CHECK}>
            <AppRouter/>
        </Loading>
        <ScrollOnTop/>
    </div>
    );
}

export default App;