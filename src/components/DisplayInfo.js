import React, { useState } from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


// class DisplayInfo extends React.Component {
//     constructor(props){
//         console.log('call constructor');
//         super(props);
//         this.state = {
//             isShowListUser: true
//         }
//     }
//     state = {
//         isShowListUser: true
//     }

//     componentDidMount(){
//         console.log("did mount");
//         setTimeout(() => {
//             document.title = 'Bee dev'
//         }, 3000);
//     }

//     componentDidUpdate(prevProps, prevState, snapshop) {
//         console.log('did update', this.props, prevProps);
//         if(this.props.listUsers !== prevProps.listUsers){
//             if(this.props.listUsers.length === 5){
//                 alert('you have got 5 user');
//             }
//         }
//     }

//     handleShowHide = () => {
//         this.setState({
//             isShowListUser: !this.state.isShowListUser,
//         })
//     }
//     render() {
//         console.log('render');
//         const { listUsers } = this.props;
//         console.log(listUsers);
//         return (
//             <div className="display-info-container">
//                 <div>
//                     <span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUser ? 'Hide list user' : 'Show list user'}</span>
//                 </div>
//                 <div>
//                     {listUsers && listUsers.map((user) => {
//                         return (
//                             <div key={user.id}>
//                                 {this.state.isShowListUser &&
//                                     <div>
//                                         <div className={Number(user.age) < 16 ? 'red' : 'green'}>
//                                             <div>My name's {user.name}</div>
//                                             <div>My age's {user.age}</div>
//                                         </div>
//                                         <div>
//                                             <button type="button" onClick={() => this.props.handleAddDeleteUser(user.id)}>X</button>
//                                         </div>
//                                     </div>

//                                 }
//                             </div>
//                         )
//                     })}
//                 </div>
//                 <img src={logo} alt=""></img>
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const handleShowHideListUser = () => {
       setShowHideListUser(!isShowHideListUser);
    }
    return (
        <div className="display-info-container">
            <div>
                <span onClick={handleShowHideListUser}>{isShowHideListUser ? 'Hide list user' : 'Show list user'}</span>
            </div>
            <div>
                {isShowHideListUser && listUsers && listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>
                                <div className={Number(user.age) < 16 ? 'red' : 'green'}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button type="button" onClick={() => props.handleAddDeleteUser(user.id)}>X</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <img src={logo} alt=""></img>
        </div>
    )
}
export default DisplayInfo