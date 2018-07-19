import React, {
    Component
} from 'react';
import "./AddStudent.css"
import withRouter from "react-router-dom/es/withRouter";

class AddStudent extends Component {
    finishAdd = () => {
        document.getElementsByClassName('add-student')[0].style.top = "-1000px";
        this.props.history.push('/home/student_list')
    }
    render() {
        return (
            <div className="add-student">
                <div className="add-student-content">
                    <label htmlFor=""><span>Ho và tên</span>
                        <input type="text" placeholder="Ngô Minh Phương"/>
                    </label>
                    <label htmlFor=""><span>Mã sinh viên</span>
                        <input type="number" placeholder="16021629"/>
                    </label>
                    <label htmlFor=""><span>Lớp-Khoa</span>
                        <input type="text" placeholder="K61N"/>
                    </label>
                    <label htmlFor=""><span>Điểm rèn luyện</span>
                        <input type="number" placeholder="90 điểm"/>
                    </label>
                    <label htmlFor=""><span>Số điện thoại</span>
                        <input type="number" placeholder="0971486734"/>
                    </label>
                    <label htmlFor=""><span>E-mail</span>
                        <input type="email" placeholder="oscar.ngo98@gmail.com"/>
                    </label>
                    <div className="list-event">
                        <span>Danh sách sự kiện đã tham gia</span>
                        <ul>
                            <li><span>Sự kiện 1</span>
                                <button className='remove-event-student'>
                                    <i className="fas fa-trash-alt"/></button>
                            </li>
                            <li><span>Sự kiện 2</span>
                                <button className='remove-event-student'>
                                    <i className="fas fa-trash-alt"/></button>
                            </li>
                            <li><span>Thêm sự kiện</span>
                                <button className='remove-event-student'>
                                    <i className="fas fa-plus-circle"/></button>
                            </li>
                        </ul>
                    </div>
                    <button onClick={this.finishAdd}>Hoàn tất?</button>
                </div>
            </div>
        )
    }
}

export default withRouter(AddStudent);