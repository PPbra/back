import React from "react";
import './EventDetails.css';

export default class EventDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "ajkdsfkjshakjh",
        };
    }

    onTodoChange(value) {
        this.setState({
            name: value
        });
    }

    render() {
        return (
            <div className='event-details-container'>Event Details
                <div className="dt-header">Chỉnh sửa tiêu đề:
                    <br/>
                    <input
                        type="text" value={this.state.name}
                        onChange={e => this.onTodoChange(e.target.value)}
                    />
                    <button>Lưu</button>
                </div>
                <div className="dt-context">Chỉnh sửa nội dung
                    <br/>
                    <input
                        type="text" value={this.state.name}
                        onChange={e => this.onTodoChange(e.target.value)}
                    />
                    <button>Lưu</button>
                </div>
                <div className="choose-img">this ischoose img</div>
                <div className="pick-time">this is picker time</div>
                <div className="choose-location">Chi tiết về địa điểm
                    <br/>
                    <input
                        type="text" value={this.state.name}
                        onChange={e => this.onTodoChange(e.target.value)}
                    />
                    <button>Lưu</button>
                </div>
                <div className="choose-student">this is choose student</div>
                <div className="student-going">Sinh viên đã đăng ký</div>
                <div className="notifications">Quản ký thông báo</div>
            </div>
        )
    }
}