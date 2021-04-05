// import React, { useState, useEffect, useContext }  from 'react';
import React from 'react';
import Select from 'react-select';
import './basic.css';

const data=[{value:'1',label:'op 1'},{value:'2',label:'op 2'},{value:'3',label:'op 3'}]

const MultiLevelSelect = ({fontStyle, name, options, defaultValue, setValue})=>{
    if(!options){
        options = data;
    }

    if(!fontStyle){
        fontStyle = {
            fontSize:'1rem'
        }
    }
    
    return <React.Fragment>
        <div className="selectLabel"><span style={fontStyle}><b>{name}</b></span></div>
        <div className="selectBox">
        <Select
            label="test 1"
            isClearable
            value={defaultValue}
            showSearchOnList={true}
            maxMenuHeight={170}
            placeholder={'Please select'}
            options={options}
            onChange={val=>{
                setValue(val)
            }}
        />
        </div>
    </React.Fragment>
}

export default MultiLevelSelect;