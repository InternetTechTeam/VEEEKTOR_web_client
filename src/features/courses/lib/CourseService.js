import $api from "../../http";

class CourseService {
    static getAllCourses = async () => {
        return await $api.get("courses");
    }

    static getCourseById = async (id) => {
        return await $api.get(`courses?id=${id}`);
    }

    static createNewCourse = async (courseData) => {
    const {name, term, teacher_id, markdown, dep_id} = courseData;
        return await $api.post("courses", {name, term: Number(term), teacher_id: Number(teacher_id), markdown, dep_id : Number(dep_id)});
    }
}

export default CourseService;