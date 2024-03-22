export const ACCESS_TOKEN_KEY = "token";

export const AUTH_STATUS = {
    LOADING: 'loading',
    CHECK: 'check',
    SIGN_IN: 'sign_in',
    SIGN_UP: 'sign_up',
    IDLE: 'idle',
    FAILED: 'failed'
}

export const initialState = {
    userData: {
        user_id: null,
        role_id: null
    },
    exp: 0,
    isLogin: false,
    status: AUTH_STATUS.IDLE,
    error: null
}