import { Endpoints, Options } from "shared/config/httpConfig";
import $api from "../../http";
import { buildQueryString } from "shared/lib/buildQueryString/buildQueryString";

class CourseService {
    static getAllCourses = async () => {
        return await $api.get(Endpoints.COURSES);
    }

    static getCourseById = async (id) => {
        return await $api.get(
            buildQueryString(
                Endpoints.COURSES,
                {[Options.ID] : id}
            ));
    }

    static postCourse = async (courseData) => {
        let {name, term, teacher_id, markdown, dep_id} = courseData;
        term = Number(term);
        teacher_id = Number(teacher_id);
        dep_id = Number(dep_id);
        return await $api.post(
            Endpoints.COURSES,
            {
                name,
                term,
                teacher_id,
                markdown, 
                dep_id
            });
    }

    static putCourse = async (courseData) => {
        let {name, term, teacher_id, markdown, dep_id, id} = courseData;
        id = Number(id);
        term = Number(term);
        return await $api.put(
            Endpoints.COURSES,
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