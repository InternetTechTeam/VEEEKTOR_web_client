export const selectUser = state => state.auth;
export const selectAuthStatus = state => state.auth.status; 
export const selectExpDate = state => state.auth.exp;
export const selectIsLogin = state => state.auth.isLogin;
export const selectIsUserData = state => state.auth.userData;