import React from 'react'
import User from '../Assets/user_one.png'
import '../Styles/Components/Topbar.css'
function Topbar() {
    return (
        <nav className='topbar_container'>
            <div className='topbar_heading'>
                <p className='topbar_heading_welcome'>Hello, User</p>
                <p className='topbar_heading_text'>Track all your expenses here</p>
            </div>
            <div className='topbar_user'>
                <p className="logout_text"><a style={{textDecoration : "none" , color : "black"}} href='/expense'>Expenses</a></p>
                <p className='logout_text'><a style={{textDecoration : "none" , color : "black"}} href='/'>Home</a></p>
                {/* <img className='user_image' src={User} alt='user_image' /> */}
            </div>
        </nav>
    )
}

export default Topbar