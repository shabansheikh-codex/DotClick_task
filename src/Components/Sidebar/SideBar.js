import React, { useState } from 'react'
import { menuData } from './SideMenuData'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const [activeTab, setActiveTab]=useState("01")
    const navigateHandler=(activeLink)=>{
        localStorage.setItem("activeTab", {activeLink});
    }
  return (
    <>
        <div className='side_header'>
            <h1>LODGN</h1>
        </div>
        <div className='side_menu'>
            <ul>
                {menuData.length && menuData.map((item)=>{
                    return( 
                        <li key={item.id} className={activeTab==item.id?"active_tab":""}><Link to={item.link} onClick={()=>setActiveTab(item.id)}>{item.label}</Link></li>
                    )
                })}
            </ul>
        </div>
        <div className='side_footer'>
            <button className='primary_btn'>
                Log-Out
            </button>
            <p>Help-Desk:</p>
            <p>786-874 9988</p>
        </div>
    </>
  )
}

export default SideBar