import {configureStore} from "@reduxjs/toolkit"
import coursesReducer from "./slices/courses/coursesSlice";
import authReducer from "./slices/authentication/authSlice";
import signUpReducer from "./slices/signUp/signUpSlice";
import userReducer from  "./slices/user/userSlice";
import courseCreationReducer from "./slices/newCourse/courseCreationSlice";
import courseEditingReducer from "./slices/courseEditing/courseEditingSlice";
import nestedPageReducer from "./slices/nestedPages/nestedPagesSlice";
import infoReducer from "./slices/info/infoSlice";
import labReducer from "./slices/lab/labSlice";
import testReducer from "./slices/test/testSlice";

const setupStore = () => {  
    return configureStore({
        reducer: 
        {
            auth: authReducer,
            signUp: signUpReducer,
            courses: coursesReducer,
            courseCreation: courseCreationReducer,
            courseEditing: courseEditingReducer,
            user: userReducer,
            nestedPages: nestedPageReducer,
            info: infoReducer,
            lab: labReducer,
            test: testReducer
        }
    });
}

export const store = setupStore();
