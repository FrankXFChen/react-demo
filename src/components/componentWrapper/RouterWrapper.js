import { useSelector } from 'react-redux';
import React, {useEffect, useState} from 'react';
import { Route } from 'react-router-dom';

const RouterWarpper = ({component:Component, redirectTo, ...props})=>{
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
        <Route
            {...props}
            render={innerProps =>
                isShown ? <Component {...innerProps}/> : null
            }
        />

    )
}

export default RouterWarpper;