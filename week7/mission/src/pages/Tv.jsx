import React from 'react'
import Movie from '../Components/Movie';
import { dummy } from "../tvDummy";


export default function MTv() {

  return (
    <div>
      <div className="movies-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.name}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  )
}