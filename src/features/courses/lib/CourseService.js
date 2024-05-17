import $api from "../../http";

class CourseService {
    static getAllCourses = async () => {
        return await $api.get("courses");
    }

    static getCourseById = async (id) => {
        return await $api.get(`courses?id=${id}`);
    }

    static postCourse = async (courseData) => {
        const {name, term, teacher_id, markdown, dep_id} = courseData;
        return await $api.post(
            "courses", {name, term: Number(term), teacher_id: Number(teacher_id), markdown, dep_id : Number(dep_id)});
    }

    static putCourse = async (courseData) => {
        let {name, term, teacher_id, markdown, dep_id, id} = courseData;
        id = Number(id);
        term = Number(term);
        return await $api.put(
            "courses",
            {
                id,
                name,
                term,
                teacher_id,
                markdown,
                dep_id
            }
        );
    }
}

export default CourseService;