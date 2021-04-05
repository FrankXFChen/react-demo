import React, { useState, useEffect} from 'react';

const testText = '这是一段测试文字\n首先我们解决跨域的问题\r打开项目生成的package.json文件，修改文件内容如下\r\n如果你赖一点可以这样写';

export default ()=>{
    const [text, setText] = useState();
    useEffect(()=>{
        setText(testText)
    },[])

    const texting = (e)=>{
        console.log('texting...,   ', e.target.value);
        setText(e.target.value)
    }
    return (
        <textarea value={text} style={{width:'200px', height:'150px'}}
        onChange={texting}></textarea>
    )
}