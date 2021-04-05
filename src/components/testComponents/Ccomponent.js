import React, { Component } from 'react';
import Tabs from '../basicComponents/Tabs';
import Tab from '../basicComponents/Tab';
import Dcomponent from './Dcomponent';
import Clock from '../Clock';
import MultiLevelSelect from '../basicComponents/MultiLevelSelect';

class Ccomponent extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:'1',
            selectedVal:null
        }
        console.log('C constructor');
    }

    UNSAFE_componentWillMount(){
        console.log('C componentWillMount');
    }

    

    dom = (<div><ul><li key='123'>wwww</li><li key='321'>xxx</li></ul></div>);

    //select = (<MultiLevelSelect defaultValue={this.state.selectedVal} setValue={val=>{this.setState({selectedVal:val});console.log(val)}}/>)

    render(){
        console.log('C render');
        let select = (<div className='a-panel'>
            <MultiLevelSelect name='Test Select' defaultValue={this.state.selectedVal} setValue={val=>{this.setState({selectedVal:val});console.log(val)}}/>
            </div>);
        return (
        <div style={{textAlign:'left'}}>
            <Tabs activeTab={this.state.activeTab} setActiveTab={val=>this.setState({activeTab:val})}>
                <Tab tabValue='1' tabLabel='Due at today' component={Clock}/>
                <Tab tabValue='2' tabLabel='1 or 3 to Due date' component={Dcomponent}/>
                <Tab tabValue='3' tabLabel='More days' component={this.dom}/>
                <Tab tabValue='4' tabLabel='A Select' component={select}/>
            </Tabs>
        </div>
        )
    }

    componentDidMount(){
        console.log('C componentDidMount');
    }
}

export default Ccomponent;
