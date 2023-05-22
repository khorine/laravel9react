import React, { Component } from 'react';

export default class NewComponent extends Component {
    state={
        name: 'Kinoti',
        age: 25,
        mobile: 731500728,
        skills: ['react', 'laravel']
    }

    handleClick =(e)=>{
        console.log("Button clicked");
    }

    handleMouseOver =(e)=>{
        console.log(e.target, e.pageX,e.pageY);
    }

    handleChangeState =()=>{
        this.setState({
            name: 'Mugambi',
            age: 30,
            mobile: 12345678,
            skills: ['php','javascript','html','css']
        });
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        console.log('Name',this.state.name);
        console.log('Age',this.state.age);
        console.log('Mobile',this.state.mobile);
    }
    render(){
        return <div>
            <h1>This is a class component</h1>
            <p>Name : {this.state.name}</p>
            <p>Age : {this.state.age}</p>
            <p>Mobile : {this.state.mobile}</p>
            <p>Skills : {this.state.skills.join(', ')}</p>

            <button type="button" class="btn btn-primary" onClick={this.handleClick} onMouseOver={this.handleMouseOver}>Click Here</button>
            <p></p>
            <button type="button" onClick={this.handleChangeState}>Change State</button>

            <form onSubmit={this.handleSubmit}>
                Name : <input type="text" name="name" onChange={this.handleChange} /> <br />
                Age : <input type="text" name="age" onChange={this.handleChange} /> <br />
                Mobile : <input type="text" name="mobile" onChange={this.handleChange} /> <br />
                <button type="button">Submit</button>
            </form>
        </div>
    }
}