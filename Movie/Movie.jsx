import React from 'react'//workbook설명에는 없었음
import * as S from "./Movie.style";

const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average}) {
    return (
      <S.Movie_container>
        <S.Img src={IMG_BASE_URL + poster_path} alt='포스터'/>
        <S.Movie_info>
            <S.H4>{title}</S.H4>
            <S.Span>{vote_average}</S.Span>
        </S.Movie_info>
      </S.Movie_container>
    )
  }
  
  export default Movie