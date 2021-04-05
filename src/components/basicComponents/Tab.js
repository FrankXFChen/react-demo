import React from 'react';
import './basic.css';

const Tab = (props)=>{
    //const {component:Component, tabValue, tableLabel} = props;
    const { component:Component } = props;

    if(typeof Component === 'function'){
        return <div><Component/></div>
    }else{
        return <div>{Component}</div>
    }
}

export default Tab;
