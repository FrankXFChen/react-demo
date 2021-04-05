import React, {Component} from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    // constructor(){
    //     super();
    // }
    // state = { count: 0 }

  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.props.dispatch({type:"INCREASE"});
  }

  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // });
    this.props.dispatch({type:"DECREASE"});
  }

  reset = () => {
    this.props.dispatch({type:"RESET"});
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <div>
            <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
  }

export default connect(mapStateToProps)(Counter);