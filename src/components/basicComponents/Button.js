import React from 'react';
import './basic.css';

const Button = (props) => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
}

export default Button; 