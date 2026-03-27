import React from "react";

class DisplayInfo extends React.Component {

    render(){
        const {listUsers} = this.props;
        console.log(listUsers);
        return (
            <div>
                {listUsers && listUsers.map((user) => {
                    return (
                        <div key={user.name}>
                            <div>My name's {user.name}</div>
                             <div>My age's {user.age}</div>
                        </div>
                    )
                })}
        
            </div>
        )
    }
}

export default DisplayInfo