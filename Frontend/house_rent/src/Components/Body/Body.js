import React from "react";
import Home from "./Home";
import { Route, Redirect, Switch } from 'react-router-dom';
import Blog from "./BlogPost/Blog";
import Add_Property from "./Add Property";
import Architecture from "./Service/Architecture/Architecture";
import Interior from "./Service/Interior/Interior";
import CommercialArchitecture from "./Service/Architecture/CommercialArchitecture";
import CommercialInterior from "./Service/Interior/CommercialInterior";
import ResidentialArchitecture from "./Service/Architecture/ResidentialArchitecture";
import ResidentialInterior from "./Service/Interior/ResidentialInterior";
import load_calculator from "./Guide/loan_calculatoe";
const Body = () =>{
    return(
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/blog" exact component={Blog} />
                <Route path="/Add_Property" exact component={Add_Property} />
                {/* <Route path="/contact" exact component={Contact} /> */}
                <Route path="/architecture" exact component={Architecture} />
                <Route path="/interior" exact component={Interior} />
                <Route path="/commercialArchitecture" exact component={CommercialArchitecture} />
                <Route path="/commercialinterior" exact component={CommercialInterior} />
                <Route path="/residentialArchitecture" exact component={ResidentialArchitecture} />
                <Route path="/residentialinterior" exact component={ResidentialInterior} />
                <Route path="/loan-calculator" exact component={load_calculator} />
                
                <Redirect from="/" to="/" />
            </Switch>
        </div>
    );
}
export default Body;