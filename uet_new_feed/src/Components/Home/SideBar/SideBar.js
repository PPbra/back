import './NavBar.css';
import React ,{Component} from "react";
import Footer from "../Footer/Footer";

class SideBar extends Component{
    showList = (e)=>{
        const target = e.target.classList;
        if(target.length == 2 ){
            target.remove("active");
        }else{
            target.add("active");
        }

    }
    render(){
        return(
            <div className="wrapper">
                <nav id='sidebar'>
                    <div className="sidebar-header">
                        <h4 ><i className="fas fa-user-graduate"></i>  ADMIN SITE</h4>
                    </div>
                    <ul className='list-unstyled components' id='list-first' >
                        <li className='active li' onClick={(e)=>this.showList(e)}><i className="fas fa-address-card"></i>  Quản lý sinh viên
                            <ul id="student-hiden">
                                <li>Danh sách sinh viên</li>
                                <li>Thêm sinh viên</li>
                            </ul>
                        </li>
                        <li className='li' onClick={(e)=>this.showList(e)}><i className="far fa-calendar-alt"></i>  Quản lý sự kiện
                            <ul id='event-hiden'>
                                <li>Thông tin các sự kiện</li>
                                <li>Thêm sự kiện</li>
                            </ul>
                        </li>
                        <li className='li' ><i className="fas fa-cog"></i>  Cài đặt</li>
                    </ul>
                </nav>
                <Footer/>
            </div>
        )
    }
}



export default SideBar;