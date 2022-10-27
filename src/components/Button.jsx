import React from 'react'

const Button = (props) => {
    return (
        <button className={`button ${props.typeButton} ${props.className}`} type={props.type} onClick={props.onClick} onSubmit={props.onSubmit} form={props.form} style={props.style}>
            {props.text}
        </button>
    )
}

export default Button