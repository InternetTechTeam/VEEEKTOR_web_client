import $api from "features/http";
import { Endpoints, Options } from "shared/config/httpConfig";
import { buildQueryString } from "shared/lib/buildQueryString/buildQueryString";

class InfoService {
    static getInfosByCourseId = async (course_id) => {
        return await $api.get(
            buildQueryString(
                Endpoints.INFOS,
                {
                    [Options.COURSE_ID]: course_id
                }
            ));
    };

    static getInfoById = async (id) => {
        return await $api.get(
            buildQueryString(
                Endpoints.INFOS,
                {
                    [Options.ID]: id
                }
            ));
    };

    static postInfo = async (infoData) => {
        return await $api.post(
            Endpoints.INFOS,
            infoData
            );
    };

    static putInfo = async (infoData) => {
        return await $api.put(
            Endpoints.INFOS,
            infoData
           );
    };
    
    static deleteInfoById = async (id) => {
        return await $api.delete(
            buildQueryString(
                Endpoints.INFOS,
                {
                    [Options.ID]: id
                }
            ));
    };
}

export default InfoService;