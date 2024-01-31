import React from "react";
import Home from "./Home";
import { Route, Redirect, Switch } from 'react-router-dom';
import Add_Property from "./Add Property";
import Architecture from "./Service/Architecture/Architecture";
import Interior from "./Service/Interior/Interior";
import CommercialArchitecture from "./Service/Architecture/CommercialArchitecture";
import CommercialInterior from "./Service/Interior/CommercialInterior";
import ResidentialArchitecture from "./Service/Architecture/ResidentialArchitecture";
import ResidentialInterior from "./Service/Interior/ResidentialInterior";
import loan_calculator from "./Guide/loan_calculatoe";
import HomeLoan from "./Service/Home Loan/HomeLoan";
import AllBank from "./Service/Home Loan/All Bank/AllBank";
import Property from "./Property/Property";
import blogpage from "./BlogPost/blogpage";
import Login from "./login and registration/login";
import Register from "./login and registration/registration";
import Dashboard from "./DashBoard/dashbord";
import ForgotPassword from "./login and registration/Forgetpassword";
import ResetPassword from "./login and registration/ResetPassword";
import BlogDetails from "./BlogPost/BlogDetails";
import PropertyList from "./Property/PropertyList";
import PropertyDetails from "./Property/PropertyDetails";
import BookViewing from "./Property/Viewbook";
import PrivateRoute from './PrivateRoute';
const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={blogpage} />
                <Route path="/blog/:id" component={BlogDetails} />
                <Route path="/Add_Property" exact component={Add_Property} />
                {/* <Route path="/contact" exact component={Contact} /> */}
                <Route path="/architecture" exact component={Architecture} />
                <Route path="/interior" exact component={Interior} />
                <Route path="/commercialArchitecture" exact component={CommercialArchitecture} />
                <Route path="/commercialinterior" exact component={CommercialInterior} />
                <Route path="/residentialArchitecture" exact component={ResidentialArchitecture} />
                <Route path="/residentialinterior" exact component={ResidentialInterior} />
                <Route path="/loan-calculator" exact component={loan_calculator} />
                <Route path="/home_loan" exact component={HomeLoan} />
                <Route path="/all_bank_list" exact component={AllBank} />
                <Route path="/property" exact component={PropertyList} />
                <Route path="/property/:id" exact component={PropertyDetails} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/book-viewing/:id" component={BookViewing} />
                <Route path="/apiv1/user/reset/:uid/:token" component={ResetPassword} />
                <Redirect from="/" to="/" />
            </Switch>
        </div>
    );
}
export default Body;