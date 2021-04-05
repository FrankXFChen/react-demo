import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { useSelector } from 'react-redux';

const Root = ()=>{
    const currentRole = useSelector(state=>state.currentRole);

    return (
        <Router basename='/'>
            <App isLogin={currentRole!==""}/>
        </Router>
    )
}

export default Root;