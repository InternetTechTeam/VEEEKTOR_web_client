import { AuthorizationPage } from "pages/AuthorizationPage";
import { CoursePage } from "pages/CoursePage";
import { HomePage } from "pages/HomePage";
import { PersonalAreaPage } from "pages/PersonalAreaPage";
import { TeacherHomePAge } from "pages/TeacherHomePage";
import { SignInForm } from "widgets/SIgnInForm";
import { SignUpForm } from "widgets/SignUpForm";

export const AppRoutes = {
    SIGN_IN: 'sign_in',
    SIGN_UP: 'sign_up',

    HOME: 'home',
    PROFILE: 'profile',
    COURSES: 'courses',

    TEACHER_HOME: 'teacher_home'
};

export const AccessFlags = {
    NOT_AUTH_ONLY: 'not_auth_only',
    AUTH_ONLY: 'auth_only',
    STUDENT_ONLY: 'student_only',
    TEACHER_ONLY: 'teacher_only',
    ADMIN_ONLY: 'admin_only',

}

export const routesPath = {
    [AppRoutes.SIGN_IN]: '/sign_in',
    [AppRoutes.SIGN_UP]: '/sign_up',

    [AppRoutes.HOME]: '/home',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.COURSES]: '/courses/:id',

    [AppRoutes.TEACHER_HOME]: '/teacher_home'
}

export const routeConfig = {
    [AppRoutes.SIGN_IN]: {
        path: routesPath[AppRoutes.SIGN_IN],
        element: 
        <AuthorizationPage>
            <SignInForm/>
        </AuthorizationPage>,
        access: AccessFlags.NOT_AUTH_ONLY
    },
    [AppRoutes.SIGN_UP]: {
        path: routesPath[AppRoutes.SIGN_UP],
        element: 
        <AuthorizationPage>
            <SignUpForm/>
        </AuthorizationPage>,
        access: AccessFlags.NOT_AUTH_ONLY
    },

    [AppRoutes.HOME]: {
        path: routesPath[AppRoutes.HOME],
        element: <HomePage/>,
        access: AccessFlags.STUDENT_ONLY
    },
    [AppRoutes.PROFILE]: {
        path: routesPath[AppRoutes.PROFILE],
        element: <PersonalAreaPage/>,
        access: AccessFlags.AUTH_ONLY
    },
    [AppRoutes.COURSES]: {
        path: routesPath[AppRoutes.COURSES],
        element: <CoursePage/>,
        access: AccessFlags.AUTH_ONLY
    },

    [AppRoutes.TEACHER_HOME]: {
        path: routesPath[AppRoutes.TEACHER_HOME],
        element: <TeacherHomePAge/>,
        access: AccessFlags.TEACHER_ONLY
    }
}