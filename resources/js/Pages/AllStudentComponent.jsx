import React,{Component} from 'react';
import StudentComponent from './StudentComponent';

export default class AllStudentComponent extends Component {
    state={
        student:{
            Name: 'Horine',
            Course: 'Telecommunications',
            Email: 'horine@gmail.com'
        }
    }
    render(){
        return(
            <>
                <StudentComponent student={this.state.student} />
            </>
        )
    }
}