import React from 'react'

export default function Details({title, overview, isShow}) {
  if(isShow === 1){
    return (
      <div className='details'>
        <h4>{title}</h4>
        <div className='overview'>{overview}</div>
      </div>
  )
  }  
  
  }

  