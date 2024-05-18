import { AuthorizationPage } from "pages/AuthorizationPage";
import {CourseCreationPage} from "pages/CourseCreationPage";
import {CourseEditingPage} from "pages/CourseEditingPage";
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
    CREATION_COURSE: 'creation_course',
    CREATION_COURSE_SUCCESS: 'creation_course_success',
    EDIT_COURSE: 'edit_course',

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
    [AppRoutes.TEACHER_HOME]: '/teacher_home',
    [AppRoutes.PROFILE]: '/profile',

    [AppRoutes.COURSES]: {
        BASE: '/courses/',
        FULL: '/courses/:course_id'
    },
    [AppRoutes.CREATION_COURSE]: '/courses/creation',
    [AppRoutes.EDIT_COURSE]: {
        BASE: '/courses/editing/',
        FULL: '/courses/editing/:course_id'
    }

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
    [AppRoutes.TEACHER_HOME]: {
        path: routesPath[AppRoutes.TEACHER_HOME],
        element: <TeacherHomePAge/>,
        access: AccessFlags.TEACHER_ONLY
    },
    [AppRoutes.PROFILE]: {
        path: routesPath[AppRoutes.PROFILE],
        element: <PersonalAreaPage/>,
        access: AccessFlags.AUTH_ONLY
    },

    [AppRoutes.COURSES]: {
        path: routesPath[AppRoutes.COURSES].FULL,
        element: <CoursePage/>,
        access: AccessFlags.AUTH_ONLY
    },

    [AppRoutes.CREATION_COURSE]: {
        path: routesPath[AppRoutes.CREATION_COURSE],
        element: <CourseCreationPage/>,
        access: AccessFlags.TEACHER_ONLY,
    },
    [AppRoutes.EDIT_COURSE]: {
        path: routesPath[AppRoutes.EDIT_COURSE].FULL,
        element: <CourseEditingPage/>,
        access: AccessFlags.TEACHER_ONLY
    }
}