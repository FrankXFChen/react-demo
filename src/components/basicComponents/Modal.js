import React from 'react';
import './basic.css';
import MyPortal from './MyPortal';

const Modal = (props)=>{
    const { visible,onClose,onOk,
        //bodyStyle,
        cancelText,
        //closable,
        //closeIcon,
        //footer,
        //mask,
        //maskStyle,
        okText,
        title,
        children,size} = props;
    
    const closeModal = ()=>{
        onClose();
    }

    const smallSize = size==='small'?{height:'110px'}:{};

    return <MyPortal visible={visible}>
        <div className="xModalWrap">
            <div style={smallSize} className="xModalContent">
                <div className="xModalHeader">
                    <div className="title"><strong>{title}</strong></div>
                    <div onClick={closeModal} className="closeIcon"></div>
                </div>
                { children && <div className="xModalBody">
                    {children}
                </div>}
                <div className="xModalFooter">
                    <button onClick={onOk}>{okText ? okText : 'OK'}</button>
                    <button onClick={closeModal}>{cancelText ? cancelText : 'Cancel'}</button>
                </div>
            </div>
            <div onClick={closeModal} className="xModalMask"></div>
        </div>
    </MyPortal>
}

export default Modal;