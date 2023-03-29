import React  from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { localServ } from '../../services/localServices'
import UserDropDown from './UserDropDown'
export default function UserMenu() {
  let userInfo = useSelector(state => {
    return state.userReducer.userInfo
  })
  let HandleLogout = () => {
    localServ.remove()
    window.location.reload()
  }
  let renderContent = () => {
    let buttonCss = "px-5 py-2 border-2 border-black rounded"
    if (userInfo) {
      return <>
        <UserDropDown user={userInfo} logOutBTN={HandleLogout}/>
        {/* <button onClick={HandleLogout} className={buttonCss}>Đăng xuất</button> */}
      </>
    } else {
      return <>
        <NavLink to='/login'>
          <button className={buttonCss}>Đăng nhập</button>
        </NavLink>
        <button className={buttonCss}>Đăng ký</button>
      </>
    }
  }
  return (
    <div className='space-x-5 flex items-center'>
      {renderContent()}
    </div>
  )
}
