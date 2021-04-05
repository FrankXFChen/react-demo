import React from 'react';

class MouseTracker extends React.Component {
    constructor(props){
        super(props);
        this.state = { x: 0, y: 0 };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
          });
    }

    render() {
        return (
          <div style={{ height: '5rem' }} onMouseMove={this.handleMouseMove}>
            <h3>移动鼠标!</h3>
            <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
          </div>
        );
      }
}

export default MouseTracker;