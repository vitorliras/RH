import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'

function Search() {
    return (
        <div>
            <div className="dropdown-container">
                <div className="dropdown">
                    <div className="dropdown-title">Produto<span className="arrow"><RiArrowDownSLine /></span></div>
                    <div className="dropdown-content">
                        <a href="#">Opção 1</a>
                        <a href="#">Opção 2</a>
                        <a href="#">Opção 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <div className="dropdown-title">Planos<span className="arrow"><RiArrowDownSLine /></span></div>
                    <div className="dropdown-content">
                        <a href="#">Opção 1</a>
                        <a href="#">Opção 2</a>
                        <a href="#">Opção 3</a>
                    </div>
                </div>

                <div className="dropdown">
                    <div className="dropdown-title">Contatos<span className="arrow"><RiArrowDownSLine /></span></div>
                    <div className="dropdown-content">
                        <a href="#">Opção 1</a>
                        <a href="#">Opção 2</a>
                        <a href="#">Opção 3</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search