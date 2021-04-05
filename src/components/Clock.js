import React, { Component } from 'react';
const pullRight = {
    marginRight:'1%',
    float:'right'
}
class Clock extends Component {
    constructor(){
        super();
        this.state = {
            time:new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.tick();
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        const cur = new Date();
        this.setState({time:cur});
    }

    render(){
        return (
                <span style={pullRight}>现在是 {this.state.time.toLocaleDateString()} {this.state.time.toLocaleTimeString()}</span>
        )
    }
}

export default Clock;