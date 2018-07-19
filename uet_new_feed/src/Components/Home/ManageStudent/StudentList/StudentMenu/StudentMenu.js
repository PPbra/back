import React, {Component} from "react";
import "./StudentMenu.css";

class StudentMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classBox: {
                cntt: {
                    k59: ["K59CNTT1","K59CNTT2","K59CNTT3","K59CNTT4","K59CNTT5"],
                    k60: ["K60CNTT1","K60CNTT2","K60CNTT3","K60CNTT4","K60CNTT5"],
                    k61: ["K61CNTT1","K61CNTT2","K61CNTT3","K61CNTT4","K61CNTT5"],
                    k62: ["K62CNTT1","K62CNTT2","K62CNTT3","K62CNTT4","K62CNTT5"],
                    k63: ["K63CNTT1","K63CNTT2","K63CNTT3","K63CNTT4","K63CNTT5"]
                },
                dtvt: {
                    k59: ["K59DTVT1","K59DTVT2","K59DTVT3","K59DTVT4","K59DTVT5"],
                    k60: ["K60DTVT1","K60DTVT2","K60DTVT3","K60DTVT4","K60DTVT5"],
                    k61: ["K61DTVT1","K61DTVT2","K61DTVT3","K61DTVT4","K61DTVT5"],
                    k62: ["K62DTVT1","K62DTVT2","K62DTVT3","K62DTVT4","K62DTVT5"],
                    k63: ["K63DTVT1","K63DTVT2","K63DTVT3","K63DTVT4","K63DTVT5"]
                },
                vlkt: {
                    k59: ["K59VLKT1","K59VLKT2","K59VLKT3","K59VLKT4","K59VLKT5"],
                    k60: ["K60VLKT1","K60VLKT2","K60VLKT3","K60VLKT4","K60VLKT5"],
                    k61: ["K61VLKT1","K61VLKT2","K61VLKT3","K61VLKT4","K61VLKT5"],
                    k62: ["K62VLKT1","K62VLKT2","K62VLKT3","K62VLKT4","K62VLKT5"],
                    k63: ["K63VLKT1","K63VLKT2","K63VLKT3","K63VLKT4","K63VLKT5"]
                },
                ckt: {
                    k59: ["K59CKT1","K59CKT2","K59CKT3","K59CKT4","K59CKT5"],
                    k60: ["K60CKT1","K60CKT2","K60CKT3","K60CKT4","K60CKT5"],
                    k61: ["K61CKT1","K61CKT2","K61CKT3","K61CKT4","K61CKT5"],
                    k62: ["K62CKT1","K62CKT2","K62CKT3","K62CKT4","K62CKT5"],
                    k63: ["K63CKT1","K63CKT2","K63CKT3","K63CKT4","K563CKT5"]
                },
                cnhk: {
                    k59: ["K59CNHK1","K59CNHK2","K59CNHK3","K59CNHK4","K59CNHK5"],
                    k60: ["K60CNHK1","K60CNHK2","K60CNHK3","K60CNHK4","K60CNHK5"],
                    k61: ["K61CNHK1","K61CNHK2","K61CNHK3","K61CNHK4","K61CNHK5"],
                    k62: ["K62CNHK1","K62CNHK2","K62CNHK3","K62CNHK4","K62CNHK5"],
                    k63: ["K63CNHK1","K63CNHK2","K63CNHK3","K63CNHK4","K63CNHK5"]
                }
            },
            class: '----------Lớp----------',
        }
    }

    renderClassOption = () => {
        const falcuty = document.getElementById("select-falcuty")[document.getElementById("select-falcuty").selectedIndex].value;
        const schoolYear = document.getElementById("select-school-year")[document.getElementById("select-school-year").selectedIndex].value;
        var tmp;
        switch (schoolYear){
            case 'k59':
                switch (falcuty){
                    case 'FIT':
                        tmp = this.state.classBox.cntt.k59;
                        console.log(tmp);
                        break;
                    case 'FEPN':
                        tmp = this.state.classBox.vlkt.k59;
                        break;
                    case 'FET':
                        tmp = this.state.classBox.dtvt.k59;
                        break;
                    case 'FEMA':
                        tmp = this.state.classBox.ckt.k59;
                        break;
                    case 'FFU':
                        tmp = this.state.classBox.cnhk.k59;
                        break;
                    case 'rand':
                        tmp = ['---------Lớp----------'];
                        break;
                    default:
                        break;
                }
                break;
            case 'k60':
                switch (falcuty){
                    case 'FIT':
                        tmp = this.state.classBox.cntt.k60;
                        break;
                    case 'FEPN':
                        tmp = this.state.classBox.vlkt.k60;
                        break;
                    case 'FET':
                        tmp = this.state.classBox.dtvt.k60;
                        break;
                    case 'FEMA':
                        tmp = this.state.classBox.ckt.k60;
                        break;
                    case 'FFU':
                        tmp = this.state.classBox.cnhk.k60;
                        break;
                    case 'rand':
                        tmp = ['---------Lớp----------'];
                        break;
                    default:
                        break;
                }
                break;
            case 'k61':
                switch (falcuty){
                    case 'FIT':
                        tmp = this.state.classBox.cntt.k61;
                        break;
                    case 'FEPN':
                        tmp = this.state.classBox.vlkt.k61;
                        break;
                    case 'FET':
                        tmp = this.state.classBox.dtvt.k61;
                        break;
                    case 'FEMA':
                        tmp = this.state.classBox.ckt.k61;
                        break;
                    case 'FFU':
                        tmp = this.state.classBox.cnhk.k61;
                        break;
                    case 'rand':
                        tmp = ['---------Lớp----------'];
                        break;
                    default:
                        break;
                }
                break;
            case 'k62':
                switch (falcuty){
                    case 'FIT':
                        tmp = this.state.classBox.cntt.k62;
                        break;
                    case 'FEPN':
                        tmp = this.state.classBox.vlkt.k62;
                        break;
                    case 'FET':
                        tmp = this.state.classBox.dtvt.k62;
                        break;
                    case 'FEMA':
                        tmp = this.state.classBox.ckt.k62;
                        break;
                    case 'FFU':
                        tmp = this.state.classBox.cnhk.k62;
                        break;
                    case 'rand':
                        tmp = ['---------Lớp----------'];
                        break;
                    default:
                        break;
                }
                break;
            case 'k63':
                switch (falcuty){
                    case 'FIT':
                        tmp = this.state.classBox.cntt.k63;
                        break;
                    case 'FEPN':
                        tmp = this.state.classBox.vlkt.k63;
                        break;
                    case 'FET':
                        tmp = this.state.classBox.dtvt.k63;
                        break;
                    case 'FEMA':
                        tmp = this.state.classBox.ckt.k63;
                        break;
                    case 'FFU':
                        tmp = this.state.classBox.cnhk.k63;
                        break;
                    case 'rand':
                        tmp = ['---------Lớp----------'];
                        break;
                    default:
                        break;
                }
                break;
            case 'rand':
                tmp = ['---------Lớp----------'];
                break;
            default:
                break;
        }

        const tmpHTMl = tmp.map((e, index)=>{
            return `<option value="${e}">${e}</option>`
        })

        document.getElementById("select-class").innerHTML = tmpHTMl.toString();

    }

    render() {
        return (
            <div className='student-menu'>
                <div className="search-menu">
                    <div className="school-year">
                        <select id='select-school-year' name={"Khóa"}>
                            <option value="rand">---------Khóa---------</option>
                            <option value="k59">K59</option>
                            <option value="k60">K60</option>
                            <option value="k61">K61</option>
                            <option value="k62">K62</option>
                            <option value="k63">K63</option>
                        </select>
                    </div>
                    <div className="falcuty">
                        <select id='select-falcuty' name={"Khoa"} onChange={this.renderClassOption}>
                            <option value="rand">------------------Khoa------------------</option>
                            <option value="FIT">Công nghệ thông tin</option>
                            <option value="FET">Điện tử viễn thông</option>
                            <option value="FEMA">Cơ học kỹ thuật & Tự động hóa</option>
                            <option value="FFU">Công nghệ hàng không và vũ trụ</option>
                            <option value="FEPN">Vật lý kỹ thuật & Công nghệ Nano</option>
                        </select>
                    </div>
                    <div className="class">
                        <select id='select-class' name={"Lớp"}>
                            <option value="rand">---------Lớp----------</option>
                        </select>
                    </div>
                </div>

            </div>
        )
    }
}

export default StudentMenu;