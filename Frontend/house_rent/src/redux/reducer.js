import { combineReducers } from 'redux';
import { InitialContactForm,InitialContactForm1, InitialContactForm2} from './forms';
import { createForms } from 'react-redux-form';
import * as actionTypes from './actionTypes';



const BlogReducer = (BlogState = { isLoading: false, Blog: [] }, action) => {
    switch (action.type) {
        case actionTypes.Blog_LOADING:
            return {
                ...BlogState,
                isLoading: true,
                Blog: []
            }
        case actionTypes.LOAD_Blog:
            return {
                ...BlogState,
                isLoading: false,
                Blog: action.payload
            }
        default:
            return BlogState;
    }
}

const PropertyReducer = (PropertyState = { isLoading: false, Property: [] }, action) => {
    switch (action.type) {
        case actionTypes.Property_LOADING:
            return {
                ...PropertyState,
                isLoading: true,
                Property: []
            }
        case actionTypes.LOAD_Property:
            return {
                ...PropertyState,
                isLoading: false,
                Property: action.payload
            }
        default:
            return PropertyState;
    }
}
export const Reducer = combineReducers({
    Blog: BlogReducer,
    Property: PropertyReducer,
    ...createForms({
        feedback: InitialContactForm,
        ResidentialinteriorContact:InitialContactForm1,
        CommercialInteriorContact:InitialContactForm2,
    })
});



