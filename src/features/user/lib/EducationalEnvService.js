import axios from "axios";

class EducationalEnvService {
  static getAllEnviroments = async () => {
    return await axios.get("/api/educational_envs");
  }

  static getEnviromentById = async (id) => {
    return await axios.get(`/api/educational_envs?${id}`);
  }

  static getDepartmentsByEnvId = async (env_id) => {
    return await axios.get(`/api/departments?env_id=${env_id}`);
  }

  static getDepartmentsById = async (dep_id) => {
    return await axios.get(`/api/departments?id=${dep_id}`);
  }
}

export default EducationalEnvService;