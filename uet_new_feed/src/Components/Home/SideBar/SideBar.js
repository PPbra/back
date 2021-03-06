import './NavBar.css';
import React, {Component} from "react";
import Footer from "../Footer/Footer";
import {Redirect, withRouter} from "react-router-dom";

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInStudent: (this.props.history.location.pathname.includes("student")),
            isInEvent: (this.props.history.location.pathname.includes("event")),
        }
    }

    showList = (e) => {
        const target = e.target.classList;
        if (target.length == 2) {
            target.remove("active");
        } else {
            target.add("active");
        }
        const tmp1 = document.getElementById("student-manager");
        if (tmp1 === e.target) {
            const tmp2 = document.getElementById("event-manager").classList;
            if (tmp2.length == 2) {
                tmp2.remove("active");
            }
        } else {
            if (tmp1.classList.length == 2) {
                tmp1.classList.remove('active');
            }
        }
    }

    componentDidMount() {
        if (this.state.isInStudent) {
            const tmp = document.getElementById("student-manager").classList;
            if (tmp.length != 2) {
                tmp.add('active');
            }
        }
        console.log();
    }

    render() {
        return (
            <div className="wrapper">
                <nav id='sidebar'>
                    <div className="sidebar-header">
                        <h4><i className="fas fa-user-graduate"/> ADMIN SITE</h4>
                    </div>
                    <ul className='list-unstyled components' id='list-first'>
                        <li className={this.state.isInStudent?"li active":"li"} id='student-manager' onClick={(e) => this.showList(e)}><i
                            className="fas fa-address-card"/> Quản lý sinh viên
                            <ul id="student-hiden">
                                <li onClick={() => {
                                    this.setState({isInStudent: true});
                                    this.props.history.push("/home/student_list")
                                }}>Danh sách sinh viên
                                </li>
                                <li onClick={() => {
                                    this.props.history.push('/home/add_student')
                                }}>Thêm sinh viên
                                </li>
                            </ul>
                        </li>
                        <li className={this.state.isInEvent?"li active":"li"} id='event-manager' onClick={(e) => this.showList(e)}><i
                            className="far fa-calendar-alt"/> Quản lý sự kiện
                            <ul id='event-hiden'>
                                <li onClick={() => {
                                    this.props.history.push("/home/event_list")
                                }}>Thông tin các sự kiện
                                </li>
                                <li>Thêm sự kiện</li>
                            </ul>
                        </li>
                        <li className='li'><i className="fas fa-cog"/> Cài đặt</li>
                    </ul>
                </nav>
                <Footer/>
            </div>
        )
    }
}


export default withRouter(SideBar);