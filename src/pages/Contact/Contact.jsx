import React from 'react';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal/Modal';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  return (
    <Layout>
      <Modal open={open} setOpen={setOpen} />
      <div className='contact'>
        <div className='title'>Contact Me</div>
        <div className='cards'>
          <div className='phone cardsitem'>
            <div className='smallcard phone'>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>0818 016 9270</span>
            </div>
          </div>
          <div className='cardsitem'>
            <div className='smallcard email'>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>agboolaiyanusolomon@gmail.com</span>
            </div>
          </div>
          <div className='cardsitem'>
            <div className='smallcard socials'>
              <div className='icon'>
                <span>
                  <a
                    target='_blank'
                    href='https://github.com/Qliqsee'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </span>{' '}
                <span>
                  <a
                    target='_blank'
                    href='https://linkedin.com/in/iyanu-agboola-314488214'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </span>{' '}
                <span>
                  <a
                    target='_blank'
                    href='https://twitter.com/agboola_iyanu'
                    rel='noreferrer'
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </span>
              </div>
              <span className='follow'>Follow Me</span>
            </div>
          </div>
        </div>
        <form className='forms' onSubmit={handleOpen}>
          <div className='left'>
            <div className='input'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Name'
                required
              />
            </div>
            <div className='input'>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='email'
                required
              />
            </div>
            <div className='input'>
              <input
                type='text'
                name='subject'
                id='subject'
                placeholder='subject'
                required
              />
            </div>
          </div>
          <div className='right'>
            <div className='message'>
              <textarea
                placeholder=' Message'
                name='message'
                id='message'
                required
              ></textarea>
            </div>
            <div className='submit'>
              <button type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
