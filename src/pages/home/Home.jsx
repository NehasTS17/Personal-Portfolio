import React from 'react'
import './home.css'
import Profile from '../../assets/home.png'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img'/>
      <div className="home__content ">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Nehas.</span> <br/>Front-end Developer
          </h1>
          <p className="home__description">
          I'm Here To Introduce In My Professional
          Portolio. I Hope <br></br>That You Enjoy The Work 
          I've Created.
          </p>
          <div className='btnhome'>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
          </div>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default home