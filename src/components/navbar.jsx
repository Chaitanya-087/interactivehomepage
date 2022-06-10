import React, { useState } from 'react'
import SideBar from './sidebar'
import UpArrow from '../images/icon-arrow-up.svg'
import DownArrow from '../images/icon-arrow-down.svg'
import Menu from '../images/icon-menu.svg'
import Todo from '../images/icon-todo.svg'
import Calender from '../images/icon-calendar.svg'
import Reminders from '../images/icon-reminders.svg'
import Plannings from '../images/icon-planning.svg'
import useMediaQuery from '@mui/material/useMediaQuery'
import ToggleContext from './togglecontext';

const NavBar = () => {
  const arrow = [UpArrow, DownArrow]
  const [featureArrowPos, setFeatureArrow] = useState(0)
  const [companyArrowPos, setcompanyArrow] = useState(0)
  const isMobile = useMediaQuery('(max-width:48em)');
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className='navbar'>
      <h2 className='logo'>span</h2>
      {isMobile ?
        <>
          <div className='side-navigation'>
            <button className='btn-menu' onClick={() => { setMenuOpen(!menuOpen) }}>
              <img src={Menu} alt="menu-icon" />
            </button>
            <div className='backdrop' data-backdrop={menuOpen} onClick={()=>setMenuOpen(false)}></div>
            <ToggleContext.Provider value={{ menuOpen, setMenuOpen }}>
              <SideBar />
            </ToggleContext.Provider>
          </div>
        </>
        :
        <>
          <nav>
            <ul className='navigation-list'>
              <li className='navigation-item' onClick={() => setFeatureArrow(~featureArrowPos + 2)}>
                <span>feature</span>
                <img src={arrow[featureArrowPos]} alt="arrow-posed" style={{ marginLeft: 0.5 + 'rem' }} />
                <ul className='collapse-list' style={{ right: 25 + '%' }} data-rollout={featureArrowPos}>
                  <li>
                    <img src={Todo} alt="" />
                    <span>Todo List</span>
                  </li>
                  <li>
                    <img src={Calender} alt="" />
                    <span>Calender</span>
                  </li>
                  <li>
                    <img src={Reminders} alt="" />
                    <span>Reminders</span>
                  </li>
                  <li>
                    <img src={Plannings} alt="" />
                    <span>Plannings</span>
                  </li>
                </ul>
              </li>
              <li className='navigation-item' onClick={() => setcompanyArrow(~companyArrowPos + 2)}>
                <span>company</span>
                <img src={arrow[companyArrowPos]} alt="arrow-posed" style={{ marginLeft: 0.5 + 'rem' }} />
                <ul className='collapse-list' style={{ right: -25 + '%' }} data-rollout={companyArrowPos}>
                  <li>
                    <span>History</span>
                  </li>
                  <li>
                    <span>Our&nbsp;Team</span>
                  </li>
                  <li>
                    <span>Blog</span>
                  </li>
                </ul>
              </li>
              <li className='navigation-item'>
                <span>career</span>
              </li>
              <li className='navigation-item'>
                <span>about</span>
              </li>
            </ul>
          </nav>
          <div className='auth'>
            <button className='btn-login'>login</button>
            <button className='btn-register'>register</button>
          </div>
        </>
      }
    </header>
  )
}
export default NavBar;