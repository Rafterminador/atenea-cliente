import React from 'react'

const Button = (props) => {
    return (
        <button className={`button ${props.typeButton} ${props.className}`} type={props.type} onClick={props.onClick} onSubmit={props.onSubmit} form={props.form}>
            {props.text}
        </button>
    )
}

export default Button