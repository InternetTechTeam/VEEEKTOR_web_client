import axios from "axios";

class AuthService {
    static signIn = async (email, password) => {
        return await axios.post("/api/users/signin", {email, password});
    }

    static signUp = async (name, surname, patronymic, email, password) => {
        return await axios.post("/api/users/signup", {name, surname, patronymic, email, password, role_id: 1});
    }

    static refresh = async () => {
        return await axios.post("/api/auth/refresh");
    }

    static logout = async () =>  {
        return await axios.post("/api/auth/logout");
    }

    static isTokenExpired = (exp) => {  
        return new Date(exp) < new Date();
    }
}

export default AuthService;