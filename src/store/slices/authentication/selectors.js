export const selectUser = state => state.userAuth;
export const selectAuthStatus = state => state.userAuth.status; 
export const selectExpDate = state => state.userAuth.exp;
export const selectIsLogin = state => state.userAuth.isLogin;
export const selectIsUserData = state => state.userAuth.userData;