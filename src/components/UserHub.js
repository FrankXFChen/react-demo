import React, { Component } from 'react';
//import {useSelector} from 'react-redux';
import { connect } from 'react-redux';

class UserHub extends Component {
    constructor(props){
        super(props);
        this.state={
            //userInfo:this.props.userInfo,
            showFlag:false
        }
        this.switchRole = this.switchRole.bind(this);
    }
    //const userInfo = useSelector(state => state.userInfo);
    render(){
        let name = this.props.userInfo.name.slice(0,2).toUpperCase();
        return (
            <div className="right">
                <div className="userIcon" onClick={()=>this.setState({showFlag:!this.state.showFlag})}>{name}</div>
                {this.state.showFlag && this.renderRoles()}
            </div>
        )
    }

    renderRoles(){
        let currentRole = this.props.currentRole;
        let rolesDom = this.props.userInfo.roles.map((val,index)=>{
            return (
                <li onClick={()=>this.switchRole(val)} className="roleItem" key={index}>
                    {currentRole===val && <strong className="currentRole">{val}</strong>}
                    {currentRole!==val && val}
                </li>
            )
        });
        return (
            <ul className="roleList">
                {rolesDom}
                <hr/>
                <div style={{marginBottom:'1rem'}}>
                      <button onClick={()=>this.logout()}>Logout</button>
                </div>
            </ul>
        )

    }

    switchRole(val){
        this.setState({showFlag:!this.state.showFlag});
        this.props.dispatch({type:'SWITCHROLE',playload:val});
    }

    logout(){
        this.props.dispatch({type:'CLEARROLE'});
    }

}

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo,
        currentRole: state.currentRole
    }
}
//export default UserHub;
export default connect(mapStateToProps)(UserHub);