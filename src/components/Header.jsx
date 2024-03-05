import React from 'react'
import Logo from '../assets/kepos.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img className='logo' src={Logo} alt=" logo imagem Usher e Alicia" />
      <h1>Exercício 2 - React</h1>
    </header>
  )
}

export default Header