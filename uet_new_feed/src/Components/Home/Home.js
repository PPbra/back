import  React , {Component} from 'react';
import SideBar from "./SideBar/SideBar";
import {Route, Switch} from "react-router-dom";
import StudentMenu from "./ManageStudent/StudentList/StudentMenu/StudentMenu";
import StudentList from "./ManageStudent/StudentList/StudentList";


class Home extends Component {
    render(){
        return(
            <div>
                <SideBar/>
                <Switch>
                    <Route  path={"/home/student_list"} component={()=><StudentList/>} />
                </Switch>


            </div>
        )
    }
}

export  default Home;