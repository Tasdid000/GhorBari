import { combineReducers } from 'redux';
import { InitialContactForm,InitialContactForm1, InitialContactForm2, InitialContactForm3, InitialContactForm4, InitialContactForm5,InitialContactForm6, InitialContactForm7} from './forms';
import { createForms } from 'react-redux-form';


export const Reducer = combineReducers({
    ...createForms({
        feedback: InitialContactForm,
        ResidentialinteriorContact:InitialContactForm1,
        CommercialInteriorContact:InitialContactForm2,
        ResidentialArchitectureContact:InitialContactForm3,
        CommercialArchitectureContact:InitialContactForm4,
        bank: InitialContactForm5,
        info:InitialContactForm6,
        requestinfo:InitialContactForm7,
    })
});



