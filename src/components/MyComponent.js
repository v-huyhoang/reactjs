import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "Bee", age: '30'},
            {id: 2, name: "Bee2", age: '31'},
            {id: 3, name: "Bee3", age: '32'},
        ]
    }
    render() {
        const myAge = 30;

        return (
            <div>
                <UserInfo />
                <DisplayInfo
                listUsers={this.state.listUsers}/>
            </div>
        );
    }
}

export default MyComponent