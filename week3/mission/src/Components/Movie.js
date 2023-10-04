import React, { useState } from 'react'//workbook설명에는 없었음
import Details from './Details';

const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280/";

export default function Movie({title, poster_path, vote_average, overview}) {
let [표시, 표시변경] = useState(0);
var isShow;

  return (
      <div className='container'>
        <div className='movie-container'>
          <img src={IMG_BASE_URL + poster_path} alt='포스터' id = "poster"  onMouseOver={()=>{표시변경(1)}}/>
          <div className='movie-info'>
              <h4>{title}</h4>
              <span>{vote_average}</span>
          </div>
        </div>
        <div className='detail-container' onMouseOut={()=>{표시변경(0)}}>
          <Details  
            title = {title}
            overview = {overview}
            isShow = {표시}/>
        </div>
      </div>
    )
}


