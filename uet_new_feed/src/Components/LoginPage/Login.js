import React,{Component}from "react";
import './Login.css'

class Login extends React.Component {
    render(){
        return (
            <div className='login-form'>
                <form>
                    <label htmlFor="">Tài khoản</label>
                    <input type="text" className='input-type' placeholder={"Tên tài khoản...."}/>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="password" className='input-type' placeholder={"Mật khẩu..."}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
                <p>Quên mật khẩu?</p>
                <p>Liên lệ quản trị nếu chưa có tài khoản</p>
            </div>
        )
    }
}

export default Login;