export const decodeToken = token => {
    const dataToken = token.split('.')[1];
    const data = JSON.parse(atob(dataToken));

    return {
            exp: data.exp, 
            userData: { 
                role_id: data.role_id,
                user_id: data.user_id
            }
        };
}

export const inMilliSeconds = (seconds) => seconds * 1000;