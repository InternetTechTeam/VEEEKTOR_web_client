import PageContent from "../components/PageContent/PageContent";
import SignInForm from "../components/SIgnInForm/SignInForm";
import SignUpForm from "../components/SignUpForm/SignUpForm";
import AuthorizationPage from "../pages/AuthorizationPage/AuthorizationPage";
import HomePage from "../pages/HomePage/HomePage";

export const privateRoutes = [
    {
        path: '/home',
        element:
        <PageContent>
            <HomePage/>
        </PageContent>,
        exact: true
    },
]

export const publicRoutes = [
    {
        path: '/sign_up',
        element:
            <AuthorizationPage>
                <SignUpForm/>
            </AuthorizationPage>,
        exact: true
    },
    {
        path: '/sign_in',
        element:
            <AuthorizationPage>
                <SignInForm/>
            </AuthorizationPage>,
        exact: true
    },
]