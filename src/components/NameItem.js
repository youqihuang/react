import React from 'react'

function NameItem({image,name}) {
  return (
    <div className="nameItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
    </div>
  )
}

export default NameItem
