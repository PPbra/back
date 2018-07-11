import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "../Home/Home";
import NavBar from "../Navbar/Navbar";
import Login from "../LoginPage/Login";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route  path={'/home'} component={() => <Home/>}/>
                    <Route  path={'/login'} component={() => <Login/>}/>
                </Switch>
            </div>

        );
    }
}

export default App;
