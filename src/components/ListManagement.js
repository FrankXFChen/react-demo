import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApiContext from './ApiContext';
import { getTaskHistory } from '../actions';
import Tabs from './basicComponents/Tabs';
import Tab from './basicComponents/Tab';


class ListManagement extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskHistory:[],
            activeTab: '1'
        }
    }
    componentDidMount(){
        // const api = this.context;
        // api.getTaskHistory().then(res=>{
        //     let data = res;
        //     this.setState({taskHistory:data})
        // })
        this.props.dispatch(getTaskHistory());
    }

    // shouldComponentUpdate(nextProps,nextStates){
    //     if (this.props.color !== nextProps.color) {
    //         return true;
    //     }
    //     if(this.state.taskHistory==nextStates.taskHistory){
    //         return false;
    //     }else{
    //         return true;
    //     }
    // }

    render(){
        return (
            <div>
            <div>This is list management page.</div>
            <div className="listM">
            <p>New Tasks</p>
            { this.props.userInfo.roles.includes('Admin') && 
            <Tabs activeTab={this.state.activeTab} setActiveTab={val=>this.setState({activeTab:val})}>
                <Tab tabValue='1' tabLabel='Due at today' component={this.renderList('today')}/>
                <Tab tabValue='2' tabLabel='Due at next 5 days' component={this.renderList('5 days')}/>
                <Tab tabValue='3' tabLabel='More days' component={this.renderList()}/>
            </Tabs>
            }
            </div>
            <div className="listM_H">
            <p>Tasks History</p>
            { this.props.userInfo.roles.includes('Admin') && this.renderHistory()}
            </div>
            </div>
        )
    }

    renderList(type) {
        let listData;
        let today = new Date();
        switch (type){
            case 'today':{
                listData = this.props.listData.filter((obj)=>{
                    let dueDate = new Date(obj.dueDate);
                    let gap = Math.ceil((dueDate-today)/(1*24*60*60*1000))
                    return gap<=0
                })
                break;
            }
            case '5 days':{
                listData = this.props.listData.filter((obj)=>{
                    let dueDate = new Date(obj.dueDate);
                    let gap = Math.ceil((dueDate-today)/(1*24*60*60*1000));
                    return (gap>0 && gap<=4)
                })
                break;
            }
            default:{
                listData = this.props.listData.filter((obj)=>{
                    let dueDate = new Date(obj.dueDate);
                    let gap = Math.ceil((dueDate-today)/(1*24*60*60*1000));
                    return gap>4;
                })
            }
        }
        const listDom = listData.map((obj,index)=>{
            return(
                <li key={index}>
                    <div>{obj.content}</div>
                    <div>
                        <button>Complete</button>
                    </div>
                </li>
            )
        })
        return(
            <ul>{listDom}</ul>
        );
    }

    renderHistory() {
        let {taskHistory, loading, error} = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>;
        }
        const listDom = taskHistory.map((obj)=>{
            return(
                <li key={obj.id}>
                    <div>{obj.name}</div>
                    <div>
                        <div className="tagClass">{obj.state}</div>
                    </div>
                </li>
            )
        })
        return(
            <ul>{listDom}</ul>
        );
    }
}

ListManagement.contextType = ApiContext;

const mapStateToProps = (state)=>{
    return {
        listData: state.listData,
        userInfo: state.userInfo,
        taskHistory: state.taskHistory,
        loading: state.loading,
        error: state.error
    }
}
export default connect(mapStateToProps)(ListManagement);