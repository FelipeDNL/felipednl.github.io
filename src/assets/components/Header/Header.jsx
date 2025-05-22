import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header-container'>
      <h1 className='titulo-header'>Felipe's Page
        <div className='quadrado'></div>
      </h1>
      <div className='opcoes-header'>
        <a 
          href='/Felipe_D_CV.pdf' 
          target="_blank" 
          className='op-header'
        >
          [Currículo]
        </a>
        <Link to='https://www.linkedin.com/in/felipednl/' className='op-header' target='_blank'>[LinkedIn]</Link>
        <Link to='/projetos' className='op-header'>[Projetos]</Link> 
        <Link to='https://github.com/FelipeDNL' className='op-header' target='_blank'>[GitHub]</Link>
      </div>
    </div>
  )
}

export default Header