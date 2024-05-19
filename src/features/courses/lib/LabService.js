import $api from "features/http";
import { Endpoints, Options } from "shared/config/httpConfig";
import { buildQueryString } from "shared/lib/buildQueryString/buildQueryString";

class LabService {
    static getlabsByCourseId = async (course_id) => {
        return await $api.get(
            buildQueryString(
                Endpoints.LABS,
                {
                    [Options.COURSE_ID]: course_id
                }
            ));
    };

    static getlabById = async (id) => {
        return await $api.get(
            buildQueryString( 
                Endpoints.LABS,
                {
                    [Options.ID]: id
                }
            ));
    };

    static postlab = async (labData) => {
        return await $api.post(
            Endpoints.LABS,
            labData
            );
    };

    static putlab = async (labData) => {
        return await $api.put(
            Endpoints.LABS,
            labData
           );
    };
    
    static deletelabById = async (id) => {
        return await $api.delete(
            buildQueryString(
                Endpoints.LABS,
                {
                    [Options.ID]: id
                }
            ));
    };
}

export default LabService;