export const decodeToken = token => {
    const dataToken = token.split('.')[1];
    const data = JSON.parse(atob(dataToken));

    return data;
}

export const isTokenExpired = expData => {
    return true;
}