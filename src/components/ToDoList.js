import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './basicComponents/Input';
import shortid from 'shortid';
import Modal from './basicComponents/Modal';
import { withRouter } from 'react-router-dom';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state={
            inputVal:'',
            inputDate:'',
            showEditorModal: false,
            showDeleteModal: false,
            currentItem:null
            //list:[this.props.dataTest]
        }
        this.add = this.add.bind(this);
        this.closeEditor = this.closeEditor.bind(this);
        this.editDone = this.editDone.bind(this);
        this.closeDeleter = this.closeDeleter.bind(this);
        this.deleteDone = this.deleteDone.bind(this);
    }

    render() {
        return (
            <div>
                <Input name="To Do :" value={this.state.inputVal} onChange={e=>this.setState({inputVal:e})}/>
                <Input type="date" name="Due Date :" value={this.state.inputDate} onChange={e=>this.setState({inputDate:e})}/>
                <div style={{marginBottom:'1rem'}}>
                <button disabled={this.props.times===0} onClick={this.add}>Add</button>
                </div>
                <div className="listClass">{this.props.listData.length>0?this.renderList():''}</div>
                <Modal 
                    visible={this.state.showEditorModal} 
                    onClose={this.closeEditor} 
                    onOk={this.editDone}
                    title={'Edit Item'}>
                    {this.state.currentItem&&
                    <div>
                        <Input name="To Do :" value={this.state.currentItem.content} onChange={e=>this.updateContent(e)}/>
                        <Input type="date" name="Due Date :" value={this.state.currentItem.dueDate} onChange={e=>this.updateDueDate(e)}/>
                    </div>
                    }
                </Modal>
                <Modal 
                    visible={this.state.showDeleteModal} 
                    onClose={this.closeDeleter} 
                    onOk={this.deleteDone}
                    okText={'Yes'}
                    cancelText={'No'}
                    size={'small'}
                    title={'Do you want to delete it?'}>
                </Modal>
            </div>
        );
    }

    add(){
        this.props.countDowner(this.state.inputVal);
        const listData = {
            content:this.state.inputVal,
            dueDate: this.state.inputDate,
            id: shortid.generate()
        }
        this.setState({inputVal:'',inputDate:''});
        //preList.push(curItem);
        this.props.dispatch({type:'ADDLIST',payload:{listData}})
        //this.setState({list:preList,inputVal:''});
    }

    renderList() {
        const listDom = this.props.listData.map((obj,index) => {
            return (
            <li style={{height:'3rem'}} key={obj.id}> 
                <div style={{width:'80%',float:'left'}}>
                    <span>{obj.content}</span><br/>
                    <span>{obj.dueDate}</span>
                </div>
                <div style={{width:'20%',float:'right'}}>
                    <span onClick={()=>this.showEditor(obj.id)} className='editor'></span>
                    <span onClick={()=>this.showDeleter(obj.id)} className='deleter'></span>
                </div>
            </li>)
        });
        return (
            <ul>{listDom}</ul>
        );
    }

    updateContent(val){
        let currentItem = this.state.currentItem;
        let newItem = {
            ...currentItem,
            content: val
        };
        this.setState({currentItem:newItem})
    }

    updateDueDate(val){
        let currentItem = this.state.currentItem;
        let newItem = {
            ...currentItem,
            dueDate: val
        }
        this.setState({currentItem:newItem})
    }

    editDone(){
        let newItem = this.state.currentItem;
        let listData = this.props.listData.map((item)=>{
            if(item.id!==newItem.id){
                return item;
            }else{
                return newItem;
            }
        });
        //listData.push(newItem);
        this.props.dispatch({type:'UPDATEITEM',payload:{listData}});
        this.closeEditor();
    }

    showEditor(id){
        let item = this.props.listData.filter(obj=>obj.id===id);
        this.setState({currentItem:item[0]});
        this.setState({showEditorModal:true});
    }

    closeEditor(){
        this.setState({showEditorModal:false});
    }

    showDeleter(id){
        let item = this.props.listData.filter(obj=>obj.id===id);
        this.setState({currentItem:item[0]});
        this.setState({showDeleteModal:true});
    }

    closeDeleter(){
        this.setState({showDeleteModal:false});
    }

    deleteDone(){
        let id  = this.state.currentItem.id;
        let listData = this.props.listData.filter((item)=>item.id!==id);
        this.props.dispatch({type:'DELETEITEM',payload:{listData}});
        this.closeDeleter();
    }

}

function mapStateToProps(state) {
    return {
      listData: state.listData
    };
  }

export default withRouter(connect(mapStateToProps)(ToDoList));


// class Person {
//     constructor(x,y){
//         this.name = x;
//         this.age = y;
//         this.say = ()=>{
//             console.log(this.name)
//         }
//     }

//     sing(){
//         console.log(this.age);
//     }
// }

// function People(name, age) {
//     this.name = name;
//     this.age = age;
//     this.say = function() {
//         console.log("hello "+this.name);
//     }
// }
// Person.prototype.sing = function() {
//         console.log("Hi "+this.name);
//     }

// function fangDou(fn, wait){
//     var timer = null;
//     return function(){
//         clearTimeout(timer);
//         timer = setTimeout(()=>{
//             fn.apply(this, arguments)
//         }, wait)
//     }
// }
// function event(){
//     console.log('ok')
// }
// document.getElementById("div1").addEventListener("scroll", fangDou(event(),1000))

// function throttle(fn, wait){
//     var prev = 0;
//     return function(){
//         var now = new Date();
//         if((now-prev)>wait){
//             fn.apply(this, arguments)
//             prev = now;
//         }
//     }
// }