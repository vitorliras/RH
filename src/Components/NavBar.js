import React, { useState } from 'react'
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


function NavBar({userName}) {
    const [showNavBar, setShowNavBar] = useState(false)
    const path = window.location.pathname
    if(!userName || userName == "null" ){
        userName = "";
      }
    return (

        <div className='navbar'>
            {
                showNavBar
                    ?
                    (<RiCloseFill
                        onClick={() => { setShowNavBar(!showNavBar) }}
                        className='menu-icon position-fixed top-10 ' />)
                    :
                    (<RiMenu3Fill
                        onClick={() => { setShowNavBar(!showNavBar) }}
                        className='menu-icon position-fixed top-10' />)
            }

            <ul className={`${showNavBar ? 'show-navBar' : 'hide-navBar'} n-box1 `}>
                <Link to={`/${userName}`}><img src='../logoRh.png' alt='' height='200' className='logoNavbar' ></img></Link>

                <div className='navBar-list'>
                    <li className={`${path === '/MeusDados' && 'active'}  ${path !== '/MeusDados' && 'desactive'}`}><Link to={`/MeusDados/${userName}`}>Meus Dados</Link></li>
                    <li className={`${path === '/ComunicadosInternos' && 'active'}  ${path !== '/ComunicadosInternos' && 'desactive'}`}><Link to={`/ComunicadosInternos/${userName}`}>Comunicados Internos</Link></li>
                    <li className={`${path === '/MinhasSolicitacoes' && 'active'}  ${path !== '/MinhasSolicitacoes' && 'desactive'}`}><Link to={`/MinhasSolicitacoes/${userName}`}>Minhas Solicitações</Link></li>
                    <li className={`${path === '/Financeiro' && 'active'}  ${path !== '/Financeiro' && 'desactive'}`}><Link to={`/Financeiro/${userName}`}>Financeiro</Link></li>
                    <li className={`${path === '/CalendarioAnual' && 'active'}  ${path !== '/CalendarioAnual' && 'desactive'}`}><Link to={`/calendarioAnual/${userName}`}>Calendário Anual</Link></li>
                    <li className={`${path === '/MinhaEquipe' && 'active'}  ${path !== '/MinhaEquipe' && 'desactive'}`}><Link to={`/MinhaEquipe/${userName}`}>Minha Equipe</Link></li>
                    <li className={`${path === '/PlanoCarreira' && 'active'}  ${path !== '/PlanoCarreira' && 'desactive'}`}><Link to={`/PlanoCarreira/${userName}`}>Plano de Carreira</Link></li>
                </div>
            </ul>
        </div>

    )
}

export default NavBar