import React,{Component} from 'react';

export default class StudentComponent extends Component {
    render(){
        const { student} = this.props;
        return(
            <>
                <h1>Student Details</h1>
                <p>Name : {student.Name}</p>
                <p>Course : {student.Course}</p>
                <p>Email : {student.Email}</p>
            </>
        )
    }
}