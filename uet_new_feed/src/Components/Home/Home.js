import  React , {Component} from 'react';
import SideBar from "./SideBar/SideBar";
import {Route, Switch} from "react-router-dom";
import StudentMenu from "./ManageStudent/StudentList/StudentMenu/StudentMenu";
import StudentList from "./ManageStudent/StudentList/StudentList";
import PopupStudent from "./ManageStudent/popupStudent/popupStudent";
import AddStudent from "./ManageStudent/AddStudent/AddStudent";
import EventList from "./ManageEvent/EventList/EventList";


class Home extends Component {
    render(){
        return(
            <div>
                <SideBar/>
                <Switch>
                    <Route  path={"/home/student_list"} component={()=><StudentList/>}/>
                    <Route path={"/home/popup"} component={()=><PopupStudent/>}/>
                    <Route path={"/home/add_student"} component ={()=><AddStudent/>}/>
                    <Route path={"/home/event_list"} component={()=><EventList/>}/>
                </Switch>


            </div>
        )
    }
}

export  default Home;