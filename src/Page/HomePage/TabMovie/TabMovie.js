import React, { useEffect, useState } from 'react'
import { movieServ } from '../../../services/movieServies'
import { Tabs } from 'antd';
import ItemMovie from '../ItemMovie/ItemMovie';
import ItemTabMovie from './ItemTabMovie';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: `Tab 1`,
        children: `Content of Tab Pane 1`,
    },
];
export default function TabMovie() {
    const [heThongRap, setHeThongRap] = useState([])
    useEffect(() => {
        movieServ
            .getMovieByTheater()
            .then(res => {
                setHeThongRap(res.data.content)
                console.log(res)
            })
            .then(err => {
                console.log(err)
            })
    }, [])

    let renderHeThongRap = () => {
        return heThongRap.map((rap) => {
            return {
                key: rap.maHeThongRap,
                label: <img className='h-16' src={rap.logo} alt="" />,
                children: (
                    <Tabs
                        style={{ height: 500 }}
                        tabPosition='left'
                        defaultActiveKey="1"
                        items={rap.lstCumRap.map((cumRap) => {
                            return {
                                key: cumRap.tenCumRap,
                                label: <div>{cumRap.tenCumRap}</div>,
                                children: <div style={{ height: 500 }} className='overflow-y-scroll'>
                                    {cumRap.danhSachPhim.map(item => {
                                        return <ItemTabMovie phim={item} />
                                    })}
                                </div>
                            }
                        })}
                        onChange={onChange} />
                )
                ,
            }
        })
    }

    return (
        <div className='container'>
            <Tabs style={{ height: 500 }} tabPosition='left' defaultActiveKey="1" items={renderHeThongRap()} onChange={onChange} />
        </div>
    )
}
