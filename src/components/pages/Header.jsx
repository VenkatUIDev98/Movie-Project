import React from 'react'
import "../assets/styles/Header.css"
import "../assets/styles/Responsive.css"
import disney from "../assets/images/disney-hotstar-logo-dark.svg"
import kid from "../assets/images/kid.svg"
import {GiHamburgerMenu} from "react-icons/gi";
import {BiSearch} from "react-icons/bi";


const Header = () => {
  return (
    <div className='page-header'>
        <div className='inner1 flex_row'>
            <GiHamburgerMenu className='nav-icon'/>
            <a href="https://www.hotstar.com/in"><img src={disney} alt="Logo" style={{paddingBottom:"6px"}}/></a>
            <button className='header-btn1'>SUBSCRIBE</button>
            <div className='navigations flex_row'>
                <ul className='flex_row nav-options'>
                    <li><a href="#">TV</a>
                        {/* <ul className='drop-down nav-options'>
                            <li>a</li>
                            <li>dfs</li>
                            <li>a</li>
                            <li>a</li>
                            <li>a</li>
                        </ul> */}
                    </li>
                    <li>
                        <a href=''>Movies</a>
                    </li>
                    <li>
                        <a href=''>Sports</a>
                    </li>
                    <li>
                        <a href=''>Disney+</a>
                    </li>
                    <li>
                        <a href=''><img src={kid} alt="Kids" /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='inner2 flex_row'>
            <div className='search-container'>
                <input type="text" placeholder='Search' />
                <BiSearch/>
            </div>
            <a href="#"><button className='header-btn2'>SUBSCRIBE</button></a>
            <div  style={{fontSize:"14px"}}>
                <a href="#">LOGIN</a>
            </div>
        </div>
    </div>


  )
}

export default Header