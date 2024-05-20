import $api from "features/http";
import { Endpoints, Options } from "shared/config/httpConfig";
import { buildQueryString } from "shared/lib/buildQueryString/buildQueryString";

class TestService {
    static getTestsByCourseId = async (course_id) => {
        return await $api.get(
            buildQueryString(
                Endpoints.TESTS,
                {
                    [Options.COURSE_ID]: course_id
                }
            ));
    };

    static getTestById = async (id) => {
        return await $api.get(
            buildQueryString(
                Endpoints.TESTS,
                {
                    [Options.ID]: id
                }
            ));
    };

    static postTest = async (testData) => {
        return await $api.post(
            Endpoints.TESTS,
            testData
            );
    };

    static putTest = async (testData) => {
        return await $api.put(
            Endpoints.TESTS,
            testData
           );
    };
    
    static deleteTestById = async (id) => {
        return await $api.delete(
            buildQueryString(
                Endpoints.TESTS,
                {
                    [Options.ID]: id
                }
            ));
    };
}

export default TestService;