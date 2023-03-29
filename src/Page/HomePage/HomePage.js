import React from 'react'
import Header from '../../Components/Header/Header'
import ListMovie from './ListMovie/ListMovie'
import TabMovie from './TabMovie/TabMovie'

export default function HomePage() {
  return (
    <div className='space-y-10'>
      <ListMovie/>
      <TabMovie/>
    </div>
  )
}
