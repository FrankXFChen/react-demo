import React, { useState } from 'react';
//import Clock from './Clock';
import ToDoList from './ToDoList';
import './Components.css';

const Home = ({match,history,location}) =>{
  const [times, setTimes] = useState(5);
  const renderTimes = ()=>{
    return (
      <div>You have {times} times left to add items today!</div>
    )
  };

  const countDown = (val)=> {
    let timesLeft = times-1;
    setTimes(timesLeft);
    console.log(val);
  }

  return (
    <div>
      {/* <div className='Container'><Clock/></div> */}
      <div className='a-panel'>
      {renderTimes()}
      <div className="Center"><ToDoList times={times} countDowner={countDown}/></div>
      </div>
    </div>
  )
  
};

export default Home;