import React from 'react';
import Effects from '../../components/Effects/Effects';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import './Home.scss';

const Home = () => {
  const roleRef = useRef();

  useEffect(() => {
    init(roleRef.current, {
      showCursor: false,
      strings: ['Software Engineer.', 'Frontend Web Developer.'],
    });
  }, []);

  return (
    <Layout>
      <div className='home'>
        <div className='section1'>
          <Effects />
        </div>
        <div className='section2'>
          <div className='intro'>
            <div className='small'>Hello 👋</div>
            <div className='big'>I&apos;m Agboola Iyanu</div>
            <div className='medium' ref={roleRef}></div>
            <div className='more'>
              <Button to='/about'>Read More</Button>
            </div>
          </div>
          <div
            className='avatar'
            style={{ backgroundImage: 'url(hacker.png)' }}
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
