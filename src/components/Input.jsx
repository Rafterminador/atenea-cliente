import React from 'react'

const Input = (props) => {
    return (
        <input className={`input ${props.className} h-[42px] placeholder:text-[#7B7B7B] nrm-text nrm-txtfld-border focus:outline-2 focus:outline-[#A954FF]`}
            id={props.id} type={props.type} name={props.name} onChange={props.onChange} placeholder={props.placeholder} disabled={props.disabled} required={props.required} defaultValue={props.defaultValue}/>
    )
}

export default Input