import $api from "../http";

class AuthService {
    static signIn = async (email, password) => {
        return await $api.post("users/signin", {email, password});
    }

    static signUp = async (name, surname, patronymic, email, password) => {
        return await $api.post("users/signup", {name, surname, patronymic, email, password, role_id: 1});
    }
}

export default AuthService;