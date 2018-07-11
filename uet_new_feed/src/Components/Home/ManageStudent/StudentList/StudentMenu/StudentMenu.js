import React,{Component} from "react";
import "./StudentMenu.css";

class StudentMenu extends React.Component{
    showMajor=(e)=>{
        const target = e.target;
        console.log(target.style.overflow);
    }
    render(){
        return (
            <div className= 'st-li-container'>
                    <ul className='st-ul-majors'>
                        <li className='st-li-major'>Khoa x
                            <div className='hidden-major'>
                                <ul className='st-ul-ks'>
                                    <li className='st-li-k'>Khóa x
                                        <div className="hidden-k">
                                            <ul className='st-ul-classes'>
                                                <li className='st-li-class'>Lớp x</li>
                                                <li className='st-li-class'>Lớp y</li>
                                                <li className='st-li-class'>Lớp z</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='st-li-k'>Khóa y
                                        <div className="hidden-k">
                                            <ul className='st-ul-classes'>
                                                <li className='st-li-class'>Lớp x</li>
                                                <li className='st-li-class'>Lớp y</li>
                                                <li className='st-li-class'>Lớp z</li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </li>


                    </ul>
            </div>
        )
    }
}

export default StudentMenu;