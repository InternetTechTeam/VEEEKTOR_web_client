import 'react-toastify/dist/ReactToastify.css';

import { AppRouter } from './providers/router';
import Loading from "shared/ui/Loading/Loading";
import ScrollOnTop from "shared/ui/ScrollOnTop/ScrollOnTop";
import {useCheckAuth} from "features/authentication/lib/useCheckAuth";
import {useUserInfo} from "features/user/lib/useUserInfo";
import AuthRequire from 'shared/ui/AuthRequire/AithRequire';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
    const {authStatus, isInit: isAuthInit} = useCheckAuth();
    const {userStatus, isUserInit} = useUserInfo();

    return (
    <div className="app">
        
        <AuthRequire>
            <Header/>
        </AuthRequire>
        <div className="content-wrapper">
            <AuthRequire>
                <div className="sidebar">
                    sidebar
                </div>
            </AuthRequire>
            <div className="content">
                <Loading isLoading={!isAuthInit || !isUserInit}>
                    {<AppRouter/>}
                </Loading>
            </div>
        </div>
        <AuthRequire>
            <Footer/>
        </AuthRequire>

        <ScrollOnTop/>
        <ToastContainer
        theme='dark'
        position='bottom-right'
        autoClose={1500}
        pauseOnHover={false}
        />
    </div>



    );
}

export default App;