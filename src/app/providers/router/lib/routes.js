import {CoursePage} from "pages/CoursePage";
import {HomePage} from "pages/HomePage";
import {PersonalAreaPage} from "pages/PersonalAreaPage";
import {AuthorizationPage} from "pages/AuthorizationPage";


import {ContentWrapper} from "widgets/ContentWrapper";
import {SignUpForm} from "widgets/SignUpForm";
import {SignInForm} from "widgets/SIgnInForm";

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

export const teacherRoutes = [
    {
        path: '/teacher_home',
        element:
        <ContentWrapper>
            <HomePage/>
        </ContentWrapper>,
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
    }
]