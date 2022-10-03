import React from 'react'

const Button = (props) => {
    return (
        <button className={`button ${props.typeButton} ${props.className}`} type={props.type} onClick={props.onClick} onSubmit={props.onSubmit}>
            {props.text}
        </button>
    )
}

export default Button