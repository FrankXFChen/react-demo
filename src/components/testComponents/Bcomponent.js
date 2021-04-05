import React, { Component } from 'react';
import Ccomponent from './Ccomponent';
import Dcomponent from './Dcomponent';

class Bcomponent extends Component{
    constructor(props){
        super(props);
        console.log('B constructor');
    }

    UNSAFE_componentWillMount(){
        console.log('B componentWillMount');
    }

    render(){
        console.log('B render');
        return (<React.Fragment><Dcomponent/><Ccomponent/></React.Fragment>)
    }

    componentDidMount(){
        console.log('B componentDidMount');
    }
}

export default Bcomponent;
