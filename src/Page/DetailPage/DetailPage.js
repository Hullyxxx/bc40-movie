import { Progress } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { movieServ } from '../../services/movieServies'

export default function DetailPage() {
    let { id } = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        let fetchDetail = async () => {
            try {
                let result = await movieServ.getMovieInformation(id);
                setMovie(result.data.content)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetail()
    }, [])

    // let HandleRenderDetailPage = () => {
    //     movieServ
    //         .getMovieInformation(id)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }
    return (
        <div className='container'>
            <div className='flex space-x-10'>
                <img className='w-1/3' src={movie.hinhAnh} alt='' />
                <div>
                    <h2 className='font-medium'>{movie.moTa}</h2>
                    <h2>{movie.tenPhim}</h2>
                    <Progress percent={movie.danhGia * 10} />
                </div>
            </div>
            <NavLink className={`rounded px-5 py-2 bg-red-400 font-medium text-white`} to={`/booking/${id}`}>Mua vé</NavLink>
        </div>
    )
}
