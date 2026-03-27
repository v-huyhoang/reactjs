import React from "react";

class UserInfo extends React.Component {
        state = {
        name: 'Bee',
        address: 'TPHCM',
        age: 26
    };
   handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value,
        })
   }
    handleOnChangeAge = (event) =>{
        this.setState({
            age: event.target.value,
        })
   }
   handleOnSubmit = (event) =>{
    event.preventDefault();
    console.log(this.state);
   }
   
    render(){
        const {name, age} = this.state;
        return (
            <div>
                My name is {name} and I'm from {age}
               
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}/>
                    <label>Your age: </label>
                    <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)}/>
                    <button>Submit</button>
                </form></div>
        )
    }
}

export default UserInfo;