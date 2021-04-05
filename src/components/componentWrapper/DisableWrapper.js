import { useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';

const DisableWrapper = ({children})=>{
    const currentRole = useSelector(state=>state.currentRole);
    const [isShown, setIsShown] = useState(false);

    useEffect(()=>{
        let flag=false;
        if(currentRole==='Admin'){
            flag = true;
        }
        setIsShown(flag);
    }, [currentRole]);

    return (
        <React.Fragment>
        {
            isShown && children
        }
        </React.Fragment>
    )
}

export default DisableWrapper;