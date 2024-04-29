import { AccessFlags } from "shared/config/routeConfig";
import { isAdmin, isStudent, isTeacher } from "./checkRole";

const validators = {
    [AccessFlags.STUDENT_ONLY]: (role, isLogin) =>  isStudent(role) && isLogin,
    [AccessFlags.TEACHER_ONLY]: (role, isLogin) =>  isTeacher(role) && isLogin,
    [AccessFlags.ADMIN_ONLY]: (role, isLogin) =>  isAdmin(role) && isLogin,
    [AccessFlags.AUTH_ONLY]: (role, isLogin) => isLogin,
    [AccessFlags.NOT_AUTH_ONLY]: (role, isLogin) => !isLogin,
}


export function checkAccess (require, roleName, isLogin) {
    return require ? validators[require](roleName, isLogin) : true;
}