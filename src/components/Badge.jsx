import React from 'react'

const Badge = (props) => {
    return (
        <div className="bg-[#DBD8FF] w-[30px] h-[24px] text-center alumnoborder ml-[9px] mt-1">
            <p className="text-[#000000] font-semibold text-[12px] py-[3px]">{props.total}</p>
        </div>
    )
}

export default Badge