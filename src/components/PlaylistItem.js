import React from 'react'

function PlaylistItem({image,name,link}) {
  return (
    <a href={link}>
    <div className="playlistItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
    </div>
    </a>
  )
}

export default PlaylistItem