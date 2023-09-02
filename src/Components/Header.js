import React, { Profiler, useState } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import { RiArrowDownSLine } from 'react-icons/ri'
import Search from './Search'


function Header() {
    const [showHeader, setShowHeader] = useState(false)
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');

    const handleSelect1 = (event) => {
        setSelectedOption1(event.target.value);
    };

    const handleSelect2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    const handleSelect3 = (event) => {
        setSelectedOption3(event.target.value);
    };
    const path = window.location.pathname
    return (

        <div className='header'>


            <div className='header-navbar-logo'>
                <NavBar />
                <Link to="/"><img src='../logo192.png' alt='' height='60' className='w-20' ></img></Link>
            </div>

            <Search/>

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