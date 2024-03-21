import $api from "../http";

class CourseService {
    static getAllCourses = async () => {

        return await $api.get("courses");
    }
}

export default CourseService;