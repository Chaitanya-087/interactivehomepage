import React, { useContext, useState } from 'react'
import Close from '../images/icon-close-menu.svg'
import ToggleContext from './togglecontext'
import UpArrow from '../images/icon-arrow-up.svg'
import Todo from '../images/icon-todo.svg'
import Calender from '../images/icon-calendar.svg'
import Reminders from '../images/icon-reminders.svg'
import Plannings from '../images/icon-planning.svg'
import DownArrow from '../images/icon-arrow-down.svg'

const SideBar = () => {
    const arrow = [UpArrow, DownArrow]
    const [featureArrowPos, setFeatureArrow] = useState(0)
    const [companyArrowPos, setcompanyArrow] = useState(0)
    const { menuOpen, setMenuOpen } = useContext(ToggleContext)
    return (
        <div className={`sidebar ${menuOpen ? 'slideopen' : 'slideclose'}`}>
            <button className='btn-close' onClick={() => setMenuOpen(!menuOpen)}>
                <img src={Close} alt="close" />
            </button>
            <nav>
                <ul className='side-navigation-list'>
                    <li className='navigation-item'>
                        <span onClick={() => setFeatureArrow(~featureArrowPos + 2)}>feature</span>
                        <img src={arrow[featureArrowPos]} alt="arrow-posed" style={{ marginLeft: 0.5 + 'rem' }} />
                        <ul className='collapse-list' data-rollout={featureArrowPos}>
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
                    <li className='navigation-item'>
                        <span onClick={() => setcompanyArrow(~companyArrowPos + 2)}>company</span>
                        <img src={arrow[companyArrowPos]} alt="arrow-posed" style={{ marginLeft: 0.5 + 'rem' }} />
                        <ul className='collapse-list' data-rollout={companyArrowPos}>
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
        </div>
    )
}

export default SideBar;
