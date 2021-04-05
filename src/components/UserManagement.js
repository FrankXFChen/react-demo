import { useSelector } from 'react-redux';
import React, { useState, useEffect, useContext } from 'react';
import ApiContext from './ApiContext';

const UserManagement = ()=>{
    const [allUserInfo, setAllUserInfo] = useState([]);
    const api = useContext(ApiContext);
    const currentRole = useSelector(state=>state.currentRole);
    console.log('currentRole'+currentRole);

    useEffect(()=>{
        api.getAllUserInfo().then(res=>{
            setAllUserInfo(res);
        });
    }, [])

    const renderRoles=(roles)=>{
        let dom = roles.map((role,index)=>{
            return (
                <div key={index} className="roleTag">
                    <span className="roleTag2">{role}</span>
                </div>
            )
        });
        return (
            <td>{dom}</td>
        )
    }
    
    const renderUserInfo=()=>{
        if(allUserInfo.length===0){
            return (<tbody></tbody>)
        }else{
            let dom = allUserInfo.map((obj)=>{
                return (
                    <tr>
                        <td>{obj.name}</td>
                        {renderRoles(obj.roles)}
                    </tr>
                )
            })
            return (
                <tbody>{dom}</tbody>
            )
        }
    }

    return (
        <div className="a-panel">
        <table className="userTable" border="1">
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>User Roles</th>
                </tr>
            </thead>
            {renderUserInfo()}
        </table>
        </div>
    )
}

export default UserManagement;
