import React from 'react';
import Layout from '../../components/Layout/Layout';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <Layout>
      <div className='portfolio'>
        <div className='title'>Portfolio</div>
        <div className='cards'>
          <div className='carditems'>
            <div className='image'>
              <img className='' src='/img1.png' alt='img' />
            </div>
            <div className='info'>
              <div className='head'>My Portfolio Website</div>
              <div className='details'>
                <div className='detailsitem'>
                  <span>Description:</span> My personal portfolio website with
                  zany animations, lol.
                </div>
                <div className='detailsitem'>
                  <span>Technology Used:</span> React, SCSS, Fontawsome
                </div>
                <div className='detailsitem'>
                  <span>Category:</span> Website
                </div>
                <div className='detailsitem'>
                  <Link to='/' target='_blank' rel='noreferrer'>
                    Visit website
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='carditems'>
            <div className='image'>
              <img className='' src='/img2.png' alt='img' />
            </div>
            <div className='info'>
              <div className='head'>Todo App Website</div>
              <div className='details'>
                <div className='detailsitem'>
                  <span>Description:</span> A very basic todo app with React.Js
                  Redux and Material UI
                </div>
                <div className='detailsitem'>
                  <span>Technology Used:</span> React, Redux, Material-UI
                </div>
                <div className='detailsitem'>
                  <span>Category:</span> Website
                </div>
                <div className='detailsitem'>
                  <a
                    href='https://qliqseetodo.netlify.app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='carditems not'>
            <div className='image'>
              <img className='' src='/img3.png' alt='img' />
            </div>
            <div className='info'>
              <div className='head'>React Chat Website</div>
              <div className='details'>
                <div className='detailsitem'>
                  <span>Description:</span> A mini react chat app with Firebase
                  and Chatengine
                </div>
                <div className='detailsitem'>
                  <span>Technology Used:</span> React, Firebase, Chatengine
                </div>
                <div className='detailsitem'>
                  <span>Category:</span> Website
                </div>
                <div className='detailsitem'>
                  <a
                    href='https://qchatapp.netlify.app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='carditems'>
            <div className='image'>
              <img className='' src='/img4.png' alt='img' />
            </div>
            <div className='info'>
              <div className='head'>Form Validation Website</div>
              <div className='details'>
                <div className='detailsitem'>
                  <span>Date:</span> A react form validation website with Formik
                  and Typescript
                </div>
                <div className='detailsitem'>
                  <span>Technology Used:</span> React, Formik,Typescript
                </div>
                <div className='detailsitem'>
                  <span>Category:</span> Website
                </div>
                <div className='detailsitem'>
                  <a
                    href='https://formwizzy.netlify.app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='carditems'>
            <div className='image'>
              <img className='' src='/img5.png' alt='img' />
            </div>
            <div className='info'>
              <div className='head'> React Crypto Website</div>
              <div className='details'>
                <div className='detailsitem'>
                  <span>Description:</span> A react crytpto app with Coinbase
                  from Rapid Api
                </div>
                <div className='detailsitem'>
                  <span>Technology Used:</span> React, Redux, Ant Design
                </div>
                <div className='detailsitem'>
                  <span>Category:</span> Website
                </div>
                <div className='detailsitem'>
                  <a
                    href='https://reactcryptoapp.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Visit website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='carditems not'>
            <div className='image'>
              <img className='' src='/img6.png' alt='img' />
            </div>
            <div className='info'>
              <div className='head'>
                JS <i>this</i> Keyword
              </div>
              <div className='details'>
                <div className='detailsitem'>
                  <span>Description:</span> A fairly detailed article on the{' '}
                  <i>this</i> Keyword in javascript
                </div>
                <div className='detailsitem'>
                  <span>Technology Used:</span> dev.to
                </div>
                <div className='detailsitem'>
                  <span>Category:</span> Writing
                </div>
                <div className='detailsitem'>
                  <a
                    href='https://dev.to/agboola_iyanu/my-widow-s-mite-the-this-keyword-in-javascript-1n86'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
