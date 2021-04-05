import React, { Component } from 'react';
import './Love.css'

class DateCounter extends Component{
    constructor(){
        super();
        this.state = {
            startDate: new Date(2017,2,31),
            talkDate: new Date(2017,6,21),
            fallDate: new Date(2017,9,4),
            showTalk: false,
            showFall: false,
            flagClass: 'flag',
            TalkClass: 'heart1',
            showFinal:false,
        }
    }

    showTalk(){
        this.setState({showTalk:true});
    }
    showFall(){
        this.setState({showFall:true});
    }

    showFinal(){
        this.setState({showFinal:true})
    }

    render(){
        let today = new Date();
        let diff = {
            start: Math.floor((today-this.state.startDate)/(1*24*60*60*1000)),
            talk: Math.floor((today-this.state.talkDate)/(1*24*60*60*1000)),
            fall: Math.floor((today-this.state.fallDate)/(1*24*60*60*1000))
        }
        let classFlag = this.state.flagClass;
        let classTalk = this.state.TalkClass;
        return(
            <div className="a-panel">
                <div>
                    <div className={classFlag} onClick={()=>this.showTalk()}></div>
                    <div className="dateContent"><i>{diff.start}</i></div>
                </div>
                {this.state.showTalk && 
                <div style={{marginTop:'2rem'}}>
                    <div className={classTalk} onClick={()=>this.showFall()}></div>
                    <div className="dateContent"><i>{diff.talk}</i></div>
                </div >}
                {this.state.showFall && 
                <div style={{marginTop:'2rem'}}>
                    <div className="heart2" onClick={()=>this.showFinal()}></div>
                    <div className="dateContent"><i>{diff.fall}</i></div>
                </div>}
                {this.state.showFinal &&
                <div className="we"></div>}
            </div>
        )
    }
}

export default DateCounter;