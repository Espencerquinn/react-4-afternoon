import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';


export default (
    <Switch>
        <Route component={ Home } exact path="/" /> 
        {/* this is an exact route at '/' to load the Home component */}
        <Route component={ About } path="/about" />
        {/* this is a route at /about and will load the "About" component */}
        <Route component={ ClassList } path="/classlist/:class" />
        <Route component={ Student } path="/student/:id" />
    </Switch>
)

//Route paramenters are parts of the URL that will change based on teh object we want to display. 
// For ex /users/1 or /users/2
//With react-router-dom, we designate a dynamic portion fo the URL to be matched by putting a colon: before it