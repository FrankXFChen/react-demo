import React from 'react';

// const Input = ({name, value, onChange, ref})=>{

//     return (
//         <div className="inputContainer">
//             <div className="cl-4 pull-left">
//                 <label className="pull-right">{name}</label>
//             </div>
//             <div className="cl-6 pull-left">
//                 <input ref={ref} className="pull-left" value={value} onChange={e => onChange(e.target.value)} />
//             </div>
//         </div>
//     )
// }

const Input = React.forwardRef((props, ref) => {
    return (
        <div className="inputContainer">
        <div className="cl-4 pull-left">
            <label className="pull-right">{props.name}</label>
        </div>
        <div className="cl-6 pull-left">
            <input type={props.type} ref={ref} className="pull-left" value={props.value} onChange={e => props.onChange(e.target.value)} />
        </div>
    </div>
    )
});
export default Input;