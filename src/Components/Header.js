import React from 'react';
import {  FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import NavBar from './NavBar';
import DropDownsMenuHeader from './DropDownMenuHeader';
import Search from './Search';
import { auth } from '../firebase';

function Header({ userName }) {
    const navigate = useNavigate();
    
    const handleLogout = async (e)  => {
        const confirmLogout = window.confirm("Deseja sair do login?");
        
        if (confirmLogout) {
          e.preventDefault();

            auth.signOut();
            navigate('/', { state:  null });

        }
    }
    return (
      <div className="header">
        <div className="header-navbar-logo">
          <NavBar />
          <Link to="/">
            <img src="../logoRh.png" alt="" className="logoHeader" />
          </Link>
        </div>
  
        <DropDownsMenuHeader />
  
        <div className="d-flex search-login">
          <Search />
          {userName ? (
            // Se o nome do usuário estiver preenchido, exiba o nome em vez de "Entrar com usuário" e o botão de logout
              
              <button className="logout-button d-flex" onClick={handleLogout}>
                <FaSignOutAlt className="mx-2" /> <h6>{userName}</h6>
              </button>
          ) : (
            // Caso contrário, exiba o link "Entrar com usuário"
            <Link to="/Login" className="button-login">
              <FaUser className="mx-2" />
              <h6>Entrar</h6>
            </Link>
          )}
        </div>
      </div>
    );
  }

export default Header;