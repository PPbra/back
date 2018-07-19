import './StudentItem.css';
import React,{
    Component
} from 'react';

export default class StudentItem extends Component{
    render(){
        return(
            <div className='student-item'>
                <span className='student-number'>{this.props.number}</span>
                <span className='student-id'>16021629</span>
                <span className="student-name">Ngo Minh Phuong</span>
                <span className='student-class'>K61N</span>
                <span className='student-point'>90 điểm</span>
                <span className='student-email'>Oscar.ngo98@gmail.com</span>
                <span className='student-phone'>0971486734</span>
                <button className='student-edit' onClick={this.props.popup}><i className="fas fa-edit"></i></button>
            </div>
        )
    }
}
