import { ROLES } from "../store/slices/user/config";

export const getRoleById = (role_id) => {
    switch(role_id) {
        case 1: return ROLES.STUDENT;
        case 2: return ROLES.TEACHER;
        case 3: return ROLES.ADMIN;
    }
}