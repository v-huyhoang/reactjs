import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {id: 1, name: "Bee", age: '15'},
            {id: 2, name: "Bee2", age: '31'},
            {id: 3, name: "Bee3", age: '32'},
        ]
    }

    handleAddNewUser = (userObj) => {
        console.log("data from parent", userObj);

        this.setState({
            listUsers: [userObj, ...this.state.listUsers],
        })
    }

        handleAddDeleteUser = (userId) => {
            let userClone = this.state.listUsers;
            userClone = userClone.filter(item => item.id !== userId);

            this.setState({
                listUsers: userClone,
            })
            
    }

    render() {

        return (
            <>
                <AddUserInfo
                handleAddNewUser = {this.handleAddNewUser}
                />

                <DisplayInfo
                listUsers={this.state.listUsers}
                handleAddDeleteUser ={this.handleAddDeleteUser}
                />
           </>
        );
    }
}

export default MyComponent