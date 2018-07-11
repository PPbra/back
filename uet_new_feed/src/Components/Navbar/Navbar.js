import React,{Component} from "react";
import "./Navbar.css"
import {Link} from "react-router-dom";
class NavBar extends Component{
    render(){
        return (
            <div className='navbar'>
                <nav>
                    <p id="home"><i className="fas fa-home"></i> Trang chủ<Link to={"/"}/></p>
                    <p id="login"><i className="fas fa-sign-in-alt"></i>  Đăng nhập<Link to={"/"}/></p>
                </nav>
            </div>
        )
    }
}

export  default NavBar;