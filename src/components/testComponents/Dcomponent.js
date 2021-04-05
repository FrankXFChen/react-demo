import React, { Component } from 'react';

class Dcomponent extends Component{
    constructor(){
        super();
        console.log('D constructor');
        this.state={
            value:'dddddddd'
        }
    }

    UNSAFE_componentWillMount(){
        //throw new Error('I am crash');
        console.log('D componentWillMount');
        //setTimeout(()=>{this.setState({value:'will mount'})},3000)
        //this.test().then(res=>this.setState({value:res}))
    }

    test(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{resolve('will mount')},1000)
        })
    }

    render(){
        console.log('D render');
        //return (<div>{this.state.value.map(obj=>{return <li>{obj.val}</li>})}</div>)
        return (<div>{this.state.value}</div>)
    }

    componentDidMount(){
        console.log('D componentDidMount');
    }

}

export default Dcomponent;
