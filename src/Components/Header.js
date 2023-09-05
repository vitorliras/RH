import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import DropDownsMenuHeader from './DropDownMenuHeader'


function Header() {

    return (

        <div className='header'>


            <div className='header-navbar-logo'>
                <NavBar />
                <Link to="/"><img src='../logo192.png' alt='' height='60' className='w-20' ></img></Link>
            </div>

            <DropDownsMenuHeader/>

            <div className='d-flex search-login '>
                <div className="search-bar mx-4">
                    <input type="text" placeholder="Pesquisar..." />
                    <button className='btn-search' type="submit">
                        <FaSearch />
                    </button>
                </div>
                <Link to="/Login" className='button-login'> <FaUser className='mx-2' />  <h6>Entrar</h6></Link>
            </div>



        </div>
    )
}

export default Header