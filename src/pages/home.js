import React from 'react'
import '../styles/home.scss'
import Herodesktop from '../images/image-hero-desktop.png'
import Heromobile from '../images/image-hero-mobile.png'
import Audiophile from '../images/client-audiophile.svg'
import Databiz from '../images/client-databiz.svg'
import Maker from '../images/client-maker.svg'
import Meet from '../images/client-meet.svg'

import { useMediaQuery } from '@mui/material'
const Home = () => {
  const isMobile = useMediaQuery('(max-width:48em)')
  console.log(isMobile)
  return (
    <div className='container' role='main' >
      <section className="first-page">
        <div className='content-box'>
          <h1 className='title'>
            Make{!isMobile ? <br />:' '}remote work
          </h1>
          <p className='content-text'>
            Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and
            watch productivity soar.
          </p>
          <button className='btn-learnmore'>
            Learn&nbsp;more
          </button>
          <ul className='products'>
              <li><img src={Databiz} alt="" /></li>
              <li><img src={Audiophile} alt="" /></li>
              <li><img src={Maker} alt="" /></li>
              <li><img src={Meet} alt="" /></li>
          </ul>
        </div>
        <img className='hero' src={!isMobile ? Herodesktop : Heromobile} alt="hero-desk" />
      </section>
    </div>

  )
}

export default Home;