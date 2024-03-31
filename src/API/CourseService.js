import $api from "../http";

class CourseService {
    static getAllCourses = async () => {
        return await $api.get("courses");
    }

    static getCourseById = async (id) => {
        return await $api.get(`courses?id=${id}`);
    }
}

export default CourseService;