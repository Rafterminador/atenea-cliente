import React from 'react'

const ItemComboBox = (props) => {
    const getValue = (e) => {
        // console.log(e.target.textContent)
        props.function(e.target.textContent)
    }
    return (
        <>
            <div className='px-2' style={{ padding: '10px' }} onClick={getValue}>{props.name}</div>
        </>
    )
}

export default ItemComboBox