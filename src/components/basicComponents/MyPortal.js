//import React from 'react';
import ReactDom from 'react-dom';

const MyPortal = (props)=>{
    const {visible, children} = props;

    if (visible) {
        return visible && ReactDom.createPortal(
            children, document.body
        )
    } else {
        return null;
    }

}
// class MyPortal extends Component{
//     constructor(props) {
//         super(props)
//         // 初始化创建渲染的父元素并添加到body下
//         //this.node = document.createElement('div');
//         //document.body.appendChild(this.node);
//       }

//     render(){
//         const {visible, children} = this.props;
//         // if(visible){
//         //     return visible && ReactDom.createPortal(
//         //         children, document.body
//         //     )
//         // }else{
//         //     return null;
//         // }
//         return visible && ReactDom.createPortal(
//             children, document.body
//         )
//     }

// }

export default MyPortal;
