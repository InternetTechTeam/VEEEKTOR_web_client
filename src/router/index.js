import ContentWrapper from "../components/Common/ContentWrapper/ContentWrapper";
import SignInForm from "../components/Common/SIgnInForm/SignInForm";
import SignUpForm from "../components/Common/SignUpForm/SignUpForm";
import AuthorizationPage from "../pages/Common/AuthorizationPage/AuthorizationPage";
import CoursePage from "../pages/Common/CoursePage/CoursePage";
import HomePage from "../pages/Common/HomePage/HomePage";
import PersonalAreaPage from "../pages/Common/PersonalAreaPage/PersonalAreaPage";
export const privateRoutes = [
    {
        path: '/home',
        element:
        <ContentWrapper>
            <HomePage/>
        </ContentWrapper>,
        exact: true
    },
    {
        path: '/profile',
        element:
        <ContentWrapper>
            <PersonalAreaPage/>
        </ContentWrapper>,
        exact: true
    },
    {
        path: '/courses/:id',
        element: 
        <ContentWrapper>
            <CoursePage/>
        </ContentWrapper>,
        exact: true
    }
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
    }
]