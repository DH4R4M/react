import React from 'react'

const Count = ({value,s}) => {
    
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>s(value + 1)}>+</button>
        <button disabled={value == 0} onClick={()=>s(value - 1)}>-</button>
    </div>
  )
}

export default Count
