import React from 'react';
import './basic.css';
//import { useState, useEffect } from 'react';

const Tabs = (props)=>{
    const {children, activeTab} = props;//children <=> tabs
    let Tab = children.find(tab=>tab.props.tabValue===activeTab);

    const tabClick = (value)=>{
        props.setActiveTab(value);
    }

    const renderTabs=()=>{
        let tabHeader = children.map(tab=>{
            let active = tab.props.tabValue === activeTab? 'activeClass':'';
            return <li onClick={e=>{tabClick(tab.props.tabValue)}} className={active} key={tab.props.tabValue}>{tab.props.tabLabel}</li>
        })
        return <ul className="tabUl">{tabHeader}</ul>
    }

    return (
        <React.Fragment>
        <div className="tabWrapper">
            <div className="tabBaseLine"></div>
            {renderTabs()}
        </div>
        <div>{Tab}</div>
        </React.Fragment>
    )
    
}

export default Tabs;