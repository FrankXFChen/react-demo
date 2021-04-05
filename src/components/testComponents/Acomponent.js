import React, { Component } from 'react';
import Bcomponent from './Bcomponent';
import ErrorBoundary from '../ErrorBoundary';
import MouseTracker from './MouseTracker';

class Acomponent extends Component{
    constructor(props){
        super(props);
        console.log('A constructor');
    }

    UNSAFE_componentWillMount(){
        console.log('A componentWillMount');
    }

    render(){
        console.log('A render');
        return (<ErrorBoundary>
            <MouseTracker/>
            <div><Bcomponent/></div>
            </ErrorBoundary>)
    }

    componentDidMount(){
        console.log('A componentDidMount');
    }
}

export default Acomponent;
