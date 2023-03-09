import React from 'react'
import './movie.css'

const Movie = ({data}) => {
  return (
    
    <div className='container'>

      {data &&
      data.map((ele)=>{
        return (
            <div className="movieContainer">
                <div className="titleBox">
                    <h3>{ele.Title}</h3>
                </div>

                <div className="posterContainer">
                    <img src={ele.Poster} alt="" />
                </div>
                   
                   <div className="yearContainer">
                    <h4>{ele.Year}</h4>
                   </div>
            </div>
        )
      })}
  </div>
   
  )
}

export default Movie
