import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaDribbble,

} from 'react-icons/fa'
import { 
  AiFillInstagram, 
  AiFillGithub, 
  AiFillLinkedin } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'



const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rp0jzzj', 'template_fiqn3zz', form.current, {
        publicKey: '3xEcL4Oo0c0g7ExJE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset()
  };
  var copyright = new Date().getFullYear()

  return (
    <section className="contact__section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get touch with me. I am always open to discussing
            new projects, creative ideas or opporunities to be part of your
            visions.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type='text'
                name='user_name'
                placeholder='Your Name'
                className='form__control'
              />
            </div>

            <div className="form__input-div">
              <input
                type='email'
                name='user_mail'
                placeholder='Your Email'
                className='form__control'
              />
            </div>

            <div className="form__input-div">
              <input
                type='text'
                name='subject'
                placeholder='Your Subject'
                className='form__control'
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder='Your Message'
              name='message'
              className="form__control textarea"
            ></textarea>
          </div>
          <div className='divbtn'>
            <button type="submit" className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </div>

        </form>
      </div>
      <div className='div__info'>
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className='info__icon' />
              </div>
              <span className="info__title">Mail me</span>
              <h4 className="info__desc">nehas170499@gmail.com</h4>
            </div>

            <div className="contact__info">
              <div className="info__item">
                <FaPhoneSquareAlt className='info__icon' />
              </div>
              <span className="info__title">Call me</span>
              <h4 className="info__desc">8136842364</h4>
            </div>
          </div>

      <div className="footer">
        <div className='p'>
          <p className='copyright'> © Copyright @{copyright} by <span>Nehas</span></p>
        </div>

        <div className="contact__socials">
          <a href="https://www.instagram.com/nigesh_t_maria?igsh=MWFveHBpd2Z6NTZhcw==" className="contact__social-link">
            < AiFillInstagram  />
          </a>

          <a href="https://github.com/NehasTS17" className="contact__social-link">
            <AiFillGithub />
          </a>

          <a href="https://www.linkedin.com/in/nehas-ts-5187a330b/" className="contact__social-link">
            <AiFillLinkedin />
          </a>

          <a href="https://nehas-Portfolio.netlify.app/" className="contact__social-link">
            <FaDribbble />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact