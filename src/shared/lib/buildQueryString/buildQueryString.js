export function buildQueryString(endpoint, options = null) {
    if(options && Object.keys(options).length > 0) {
        return [
        endpoint,
        Object.keys(options)
            .map(key => `${key}=${options[key]}`)
            .join("&")
        ].join("?");
    }

    return endpoint;
}