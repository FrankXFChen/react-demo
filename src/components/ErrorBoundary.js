import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(){
        super();
        this.state={
            error: false,
            errorMessage: ''
        }
    }

    static getDerivedStateFromError(error){
        return {error:true}
    }

    componentDidCatch(error, info){
        this.setState({errorMessage:error.message})
    }

    render(){
        if(this.state.error){
            return (
                <div style={{color:'red'}}>
                    <h2>Oops, something went wrong...</h2>
                    <p>{this.state.errorMessage}</p>
                </div>
            )
        }
            return this.props.children;

    }
}

export default ErrorBoundary;