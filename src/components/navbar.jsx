import React, { useState } from 'react'
import UpArrow from '../images/icon-arrow-up.svg'
import DownArrow from '../images/icon-arrow-down.svg'
import Menu from '../images/icon-menu.svg'
import Close from '../images/icon-close-menu.svg'

const Navbar = () => {

  const arrow = [DownArrow, UpArrow]
  const [Pos1, setPos1] = useState(0)
  const [Pos2, setPos2] = useState(0)
  const [open, setopen] = useState(false)

  return (
    <header className='navbar'>
      <h1 className='logo'>span</h1>
      <div className='menu' onClick={() => setopen(!open)} data-click={open}>
        <img src={Menu} alt="burger" />
      </div>
      <nav className='primary-navigation' data-open-nav={open}>
        <ul className='navlist'>
          <li className='menu-close' onClick={() => setopen(false)}>
            <img src={Close} alt="closebtn" />
          </li>
          <li className='navitem' onClick={() => setPos1(~Pos1 + 2)}>
            <span>feature</span>
            <img src={arrow[Pos1]} alt="arrow-posed" />
          </li>
          <li className='navitem' onClick={() => setPos2(~Pos2 + 2)}>
            <span>company</span>
            <img src={arrow[Pos2]} alt="arrow-posed" />
          </li>
          <li className='navitem'>
            <span>career</span>
          </li>
          <li className='navitem'>
            <span>about</span>
          </li>
          <li className='buttons'>
            <button className='login'>login</button>
            <button className='register'>register</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;