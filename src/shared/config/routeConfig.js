import { AuthorizationPage } from "pages/AuthorizationPage";
import {CourseCreationPage} from "pages/CourseCreationPage";
import {CourseEditingPage} from "pages/CourseEditingPage";
import { CoursePage } from "pages/CoursePage";
import { HomePage } from "pages/HomePage";
import { InfoPage } from "pages/InfoPage";
import LabPage from "pages/LabPage/ui/LabPage";
import { PersonalAreaPage } from "pages/PersonalAreaPage";
import { TeacherHomePAge } from "pages/TeacherHomePage";
import { SignInForm } from "widgets/SIgnInForm";
import { SignUpForm } from "widgets/SignUpForm";

export const AppRoutes = {
    SIGN_IN: 'sign_in',
    SIGN_UP: 'sign_up',

    HOME: 'home',
    PROFILE: 'profile',

    TEACHER_HOME: 'teacher_home',

    COURSES: 'courses',
    CREATION_COURSE: 'creation_course',
    EDIT_COURSE: 'edit_course',

    LABS: 'labs',
    LAB_CREATION: 'creation_lab',
    EDIT_LAB: 'edit_lab',

    TESTS: 'tests',
    TEST_CREATION: 'creation_test',
    EDIT_TEST: 'edit_test',

    INFOS: 'infos',
    INFO_CREATION: 'creation_info',
    EDIT_INFO: 'edit_info',
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
    },

    [AppRoutes.INFOS]: {
        BASE: '/courses/:course_id/infos',
        FULL: '/courses/:course_id/infos/:info_id',
    },

    [AppRoutes.LABS]: {
        BASE: '/courses/:course_id/labs',
        FULL: '/courses/:course_id/labs/:lab_id'
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
    },

    [AppRoutes.INFOS]: {
        path: routesPath[AppRoutes.INFOS].FULL,
        element: <InfoPage/>,
        access: AccessFlags.AUTH_ONLY
    },

    [AppRoutes.LABS]: {
        path: routesPath[AppRoutes.LABS].FULL,
        element: <LabPage/>,
        access: AccessFlags.AUTH_ONLY
    },
}