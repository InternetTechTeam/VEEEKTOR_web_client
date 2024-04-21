import { AppRouter } from './providers/router';
import Loading from "shared/ui/Loading/Loading";
import ScrollOnTop from "shared/ui/ScrollOnTop/ScrollOnTop";
import {useCheckAuth} from "features/authentication/lib/useCheckAuth";
import {useUserInfo} from "features/user/lib/useUserInfo";
import { AUTH_STATUS } from './store/slices/authentication/config';

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