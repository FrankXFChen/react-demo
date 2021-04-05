import React, { Component } from 'react';
import ApiContext from './ApiContext';
import { connect } from 'react-redux';
import Input from './basicComponents/Input';
import Textarea from './basicComponents/Textarea'

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            passWord:'',
            loginIn: false,
            tryLogin: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.inputRef = React.createRef();
    }
    render(){
        return (
            <div className="login_panel">
                {/* <div className="inputContainer">
                    <div className="cl-4 pull-left">
                        <label className="pull-right">User Name</label>
                    </div>
                    <div className="cl-6 pull-left">
                        <input className="pull-left" ref={this.inputRef} value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} />
                    </div>
                </div> */}
                <Input ref={this.inputRef} type="text" name="User Name" value={this.state.userName} onChange={e => this.setState({ userName: e })}/>
                {/* <div className="inputContainer">
                    <div className="cl-4 pull-left">
                        <label className="pull-right">Password</label>
                    </div>
                    <div className="cl-6 pull-left">
                        <input className="pull-left" value={this.state.passWord} onChange={e => this.setState({ passWord: e.target.value })} />
                    </div>
                </div> */}
                <Input name="Password" type="password" value={this.state.passWord} onChange={e => this.setState({ passWord: e })}/>
                <div>
                    <button onClick={this.handleLogin}>Login</button>
                </div>
                {!this.context.authenticated && this.state.tryLogin && <div>User Name or Password is not correct</div>}
                <Textarea/>
            </div>
        )
    }

    handleLogin(){
        const api = this.context;
        const {userName, passWord} = this.state;
        api.signIn(userName, passWord).then(
            (res) => {
                let userId = res.userId;
                api.getCurrentUserInfo(userId).then(
                    (res) => {
                        let userInfo = res[0];
                        let currentRole = userInfo.roles[0];
                        console.log('userinfo', userInfo);
                        this.props.dispatch({type:'SETINFO',playload:{userInfo}});
                        this.props.dispatch({type:'SWITCHROLE',playload:currentRole});
                        this.props.history.push('/home');
                    }
                );
            }
        ).catch(err=>{
            this.setState({tryLogin:true});
            this.setState({userName:'',passWord:''});
            this.inputRef.current.focus();
        });
    }
}

LoginPage.contextType = ApiContext;

const mapStateToProps = (state)=>{
    return {
        userInfo: state.userInfo
    }
}
export default connect(mapStateToProps)(LoginPage);
