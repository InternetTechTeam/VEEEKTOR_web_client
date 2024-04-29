import { ROLES } from "app/store/slices/user/config";
import { getRoleById } from "features/user";

export function isStudent(role) {
    return role === ROLES.STUDENT;
}

export function isAdmin(role) {
    return role === ROLES.ADMIN;
}

export function isTeacher(role) {
    return role === ROLES.TEACHER;
}