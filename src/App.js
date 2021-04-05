import React, { Component } from 'react';
//import { connect, useSelector } from 'react-redux';
import { withRouter, Link, Route ,Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ListManagement from './components/ListManagement';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
//import Counter from './components/Counter';
import ApiContext from './components/ApiContext';
import Api from './api';
import { hot } from 'react-hot-loader/root';
import UserHub from './components/UserHub';
import UserManagement from './components/UserManagement';
import RouterWarpper from './components/componentWrapper/RouterWrapper';
import DisableWrapper from './components/componentWrapper/DisableWrapper';
import Acomponent from './components/testComponents/Acomponent';
import DateCounter from './components/dateCounter/DateCounter';
import ListPDFViewer from './components/ListPDFViewer';
//import ErrorBoundary from './components/ErrorBoundary';

const ulStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};
 
const liStyle = {
  display: 'inline-block',
  float: 'left',
  padding: '0 0.5rem',
  marginTop: '1rem'
};

//const currentRole = useSelector(state=>state.currentRole);

const Navigation = () => (
  <header className="headerClass">
    <nav>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to='/Home'>Home</Link></li>
        <li style={liStyle}><Link to="/Manage">ListManagement</Link></li>
        {/* <li style={liStyle}><Link to="/Counter">Counter</Link></li> */}
        <li style={liStyle}><Link to="/ListPDF">ListPDF</Link></li>
        <li style={liStyle}><Link to="/Test">Test</Link></li>
{/* how to use 'to' in Link
let obj = {
  pathname:`/.../...`
  state: {...}
}
<Link to = {obj}>xxx</Link>

this.props.location.state
this.props.match.params.id
 */}
        <DisableWrapper>
          <li style={liStyle}><Link to="/userManage">UserManagement</Link></li>
        </DisableWrapper>
        <DisableWrapper>
          <li style={liStyle}><Link to="/loveRecorder">LoveRecorder</Link></li>
        </DisableWrapper>
      </ul>
    </nav>
    <UserHub/>
  </header>
)

const Content = () => (
  <div>
  <Navigation/>
    <hr/>
    <Route path="/(Home)" component={Home}></Route>
    <Route path="/Manage" component={ListManagement}></Route>
    {/* <Route path="/Counter" component={Counter}></Route> */}
    <Route path="/ListPDF" component={ListPDFViewer}></Route>
    <Route path="/Test" component={Acomponent}/>
    <RouterWarpper path="/userManage" testKey="1234" component={UserManagement}/>
    <RouterWarpper path="/loveRecorder" testKey="4321" component={DateCounter}/>
    {/* <Route path="/userManage" component={UserManagement}></Route> */}
  </div>
)

class App extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.api = new Api(this.props.history);
    // this.state={
    //   authenticated:false
    // }
  }

  render() {
    return (
      // <Provider store={store}>
      // <Router basename='/'>
      <ApiContext.Provider value={this.api}>
        <div className="App">
          <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <h2>Welcome to React</h2>
          </div>
          <Switch>
            <Route exact path='/(login)' component={LoginPage}></Route>
            {/* {!this.api.authenticated &&
            <Redirect to={{pathname:'/login'}}/>} */}
            {!this.props.isLogin &&
            <Redirect to={{pathname:'/login'}}/>}
            <Route component={Content}></Route>
          </Switch>
        </div>
      
      </ApiContext.Provider>
      //{/* </Provider> */}
    )
  }
  // render() {
  //   return (
  //     <div>
  //     <div className="App">
  //       <div className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h2>Welcome to React</h2>
  //       </div>
  //     </div>
  //     <div style={container}><Clock/></div>
  //     {this.renderTimes()}
  //     <div className="Center"><ToDoList countDown={this.countDown} dataTest={testData}/></div>
  //     </div>
  //   );
  // }
  
}

export default withRouter(hot(App));
//npm run test:chrome  *devTools