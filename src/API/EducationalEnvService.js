import axios from "axios";

class EducationalEnvService {
  static getAllEnviroments = async () => {
    return await axios.get("/api/educational_envs");
  }

  static getDepartmentsByEnvId = async (env_id) => {
    return await axios.get(`/api/departments?env_id=${env_id}`);
  }
}

export default EducationalEnvService;