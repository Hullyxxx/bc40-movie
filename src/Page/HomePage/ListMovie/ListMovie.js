import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../services/movieServies'
import ItemMovie from '../ItemMovie/ItemMovie'

export default function ListMovie() {
    const [ movies, setMovies] = useState([]) 
    useEffect(() => {
        movieServ
        .getMovieList()
        .then(res => {
            console.log(res)
            setMovies(res.data.content)
        })
        .then(err => {
            console.log(err)
        })
    }, [])
  return (
    <div className='container grid grid-cols-5 gap-10'>
        {movies.map(item => {
            return <ItemMovie data={item} key={item.maPhim}/>
        })}
    </div>
  )
}
