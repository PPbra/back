import React, {
    Component
} from 'react';
import "./popupStudent.css"

class PopupStudent extends Component {
    finishPopup = ()=>{
        const tmp = document.getElementsByClassName('popup')[0];
        tmp.style.top = "-1000px"
    }
    render() {
        return (
                <div className="popup">
                    <div className="popup-content">
                        <label htmlFor=""><span>Ho và tên</span>
                            <input type="text" placeholder="Ngô Minh Phương" disabled/>
                        </label>
                        <label htmlFor=""><span>Mã sinh viên</span>
                            <input type="number" placeholder="16021629" disabled/>
                        </label>
                        <label htmlFor=""><span>Lớp-Khoa</span>
                            <input type="text" placeholder="K61N" disabled/>
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
                            <span >Danh sách sự kiện đã tham gia</span>
                            <ul>
                                <li><span>Sự kiện 1</span> <button className='remove-event-student'>
                                    <i className="fas fa-trash-alt"></i></button></li>
                                <li><span>Sự kiện 2</span><button className='remove-event-student'>
                                    <i className="fas fa-trash-alt"></i></button></li>
                                <li><span>Thêm sự kiện</span><button className='remove-event-student'>
                                    <i className="fas fa-plus-circle"></i></button></li>
                            </ul>
                        </div>
                        <button onClick={this.finishPopup}>Hoàn tất?</button>
                    </div>
                </div>
        )
    }
}

export default PopupStudent;