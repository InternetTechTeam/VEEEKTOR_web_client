import axios from "axios";

class AuthService {
    static signIn = async (email, password) => {
        return await axios.post("/api/users/signin", {email, password});
    }

    static signUp = async (name, surname, patronymic, email, password, dep_id) => {
        return await axios.post("/api/users/signup", {email, password, name, patronymic, surname, dep_id}, {
            withCredentials: true
        });
    }

    static refresh = async () => {
        return await axios.post("/api/auth/refresh");
    }

    static logout = async () =>  {
        return await axios.post("/api/auth/logout");
    }

    static getAllEnviroments = async () => {
        return await axios.post("/api/");
    }

    static isTokenExpired = (exp) => {
        const currentDate = new Date();
        return exp < currentDate.getTime();
    }
}

export default AuthService;