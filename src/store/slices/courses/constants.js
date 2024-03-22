export const COURSES_STATUS = {
    LOADING: 'loading',
    SUCCEEDED: 'succeeded',
    IDLE: 'idle',
    FAILED: 'failed'
}

export const initialState = {
    courses: [],
    status: COURSES_STATUS.IDLE,
    error: null
}