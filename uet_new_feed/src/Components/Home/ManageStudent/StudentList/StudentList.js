import StudentMenu from "./StudentMenu/StudentMenu";
import * as React from "react/cjs/react.development";
import PopupStudent from "../popupStudent/popupStudent";
import "./StudentList.css"
import StudentItem from "./StudentItem/StudentItem";

class StudentList extends React.Component {
    popupStudentDetail = () => {
        const tmp = document.getElementsByClassName("popup")[0];
        tmp.style.top = '0';
    }

    render() {
        return (
            <div>
                <PopupStudent/>
                <StudentMenu/>
                <div className='student-item'>
                    <span className='student-number'>STT</span>
                    <span className='student-id'>Mã sinh viên</span>
                    <span className="student-name">Họ và tên</span>
                    <span className='student-class'>Lớp</span>
                    <span className='student-point'>Điểm</span>
                    <span className='student-email'>E-mail</span>
                    <span className='student-phone'>Số điện thoại</span>
                    <span className='student-edit'>Chỉnh sửa</span>
                </div>
                <StudentItem number={1} popup={this.popupStudentDetail}/>
                <StudentItem number={2} popup={this.popupStudentDetail}/>
                <StudentItem number={3} popup={this.popupStudentDetail}/>
                <StudentItem number={4} popup={this.popupStudentDetail}/>
                <StudentItem number={5} popup={this.popupStudentDetail}/>
                <StudentItem number={6} popup={this.popupStudentDetail}/>
                <StudentItem number={7} popup={this.popupStudentDetail}/>
                <StudentItem number={8} popup={this.popupStudentDetail}/>
                <StudentItem number={9} popup={this.popupStudentDetail}/>
                <StudentItem number={10} popup={this.popupStudentDetail}/>
                <StudentItem number={11} popup={this.popupStudentDetail}/>
                <StudentItem number={12} popup={this.popupStudentDetail}/>
                <StudentItem number={13} popup={this.popupStudentDetail}/>
                <StudentItem number={14} popup={this.popupStudentDetail}/>
                <StudentItem number={15} popup={this.popupStudentDetail}/>
                <StudentItem number={16} popup={this.popupStudentDetail}/>
                <StudentItem number={17} popup={this.popupStudentDetail}/>
                <StudentItem number={18} popup={this.popupStudentDetail}/>
                <StudentItem number={19} popup={this.popupStudentDetail}/>
                <StudentItem number={20} popup={this.popupStudentDetail}/>
                <StudentItem number={21} popup={this.popupStudentDetail}/>
                <StudentItem number={22} popup={this.popupStudentDetail}/>

            </div>
        )
    }
}

export default StudentList;