import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


class DisplayInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isShowListUser: true
        }
    }
    state = {
        isShowListUser: true
    }

    componentDidMount(){
        console.log("did mount");
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser,
        })
    }
    render() {
        const { listUsers } = this.props;
        console.log(listUsers);
        return (
            <div className="display-info-container">
                <div>
                    <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser ? 'Hide list user' : 'Show list user'}</span>
                </div>
                <div>
                    {listUsers && listUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                {this.state.isShowListUser &&
                                    <div>
                                        <div className={Number(user.age) < 16 ? 'red' : 'green'}>
                                            <div>My name's {user.name}</div>
                                            <div>My age's {user.age}</div>
                                        </div>
                                        <div>
                                            <button type="button" onClick={() => this.props.handleAddDeleteUser(user.id)}>X</button>
                                        </div>
                                    </div>

                                }
                            </div>
                        )
                    })}
                </div>
                <img src={logo} alt=""></img>
            </div>
        )
    }
}

export default DisplayInfo