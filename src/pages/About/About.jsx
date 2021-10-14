import React from 'react';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import './About.scss';
import { useState } from 'react';

const About = () => {
  const [tab, setTab] = useState(true);
  const toggleTab = () => {
    setTab(!tab);
  };

  return (
    <Layout>
      <div className='about'>
        <div className='title'>About Me</div>

        <div className='wrapper'>
          <div className='left'>
            <span>
              <img src='/hacker.png' alt='avatar' />
            </span>
          </div>

          <div className='right'>
            <div className='description'>
              Hello, I'm Agboola Iyanu. A frontend developer with a good grasp
              of algorithms and crucial engineering concepts but also aspiring
              to get better in all ramifications. I'm one ready to put in all
              the effort needed. I build amazing UI using the latest
              technologies I can get my hands on. I have a Bachelor's Degree in
              Electrical and Electronics Engineering.
            </div>

            <div className='skills'>
              <div className='small'>
                <span>Skills</span>
              </div>

              <div className='skillsets'>
                <span>Javascript</span>
                <span>React</span>
                <span>Redux</span>
                <span>Typescript</span>
                <span>Next.js</span>
                <span>Gatsby</span>
                <span>Git</span>
                <span>Bootstrap</span>
                <span>Sass</span>
                <span>Firebase</span>
                <span>Material UI</span>
                <span>Tailwind CSS</span>
                <span>Emotion</span>
                <span>Ant Design</span>
                <span>Formik</span>
                <span>Chakra UI</span>
                <span>Chatengine</span>
                <span>Yup</span>
                <span>Graphql</span>
              </div>
            </div>

            <div className='edex'>
              <div className='tab'>
                <span className={tab && 'active'} onClick={toggleTab}>
                  Education
                </span>
                <span className={tab === false && 'active'} onClick={toggleTab}>
                  Experience
                </span>
              </div>
              {/* <div className={tab ? `${styles.info}` : `hidden`}> */}
              <div className={tab ? 'info' : 'hidden'}>
                <div className='tabcontent'>
                  <div className='timeline'>
                    <div className='timelineitem'>
                      <div className='date'>
                        <span>2002 - 2007</span>
                      </div>
                      <div className='degree'>
                        Primary School Living Certificate |
                        <span>
                          {' '}
                          Federal Government College Staff School, Ijaniki
                        </span>
                      </div>
                      <div className='bio'>
                        Baby Steps right? I spent five(5) lively years in this
                        highly esteemed school and it was worth the go. The
                        person I am now, the path I walk all started there. I
                        remember how I used to tell everyone I was gonna become
                        an Engineer, and here I am.{' '}
                      </div>
                    </div>
                    <div className='timelineitem'>
                      <div className='date'>
                        <span>2007 - 2013</span>
                      </div>
                      <div className='degree'>
                        WASSCE, NECO |
                        <span> Goshen Christian Academy, Bacita</span>
                      </div>
                      <div className='bio'>
                        Yes, secondary school memories are very nostalgic.
                        Goshen Christian Academy groomed me. A very efficient
                        place for learning in my opinion. I opted in for the
                        sciences even when I thought I was best suited for Arts
                        and I still did great.
                      </div>
                    </div>
                    <div className='timelineitem'>
                      <div className='date'>
                        <span>2014 - 2019</span>
                      </div>
                      <div className='degree'>
                        B.eng Electrical and Electronics Engineering |
                        <span> Federal University of Technology, Minna</span>
                      </div>
                      <div className='bio'>
                        Mid life Sophomore, lol. I dunno how and what to say
                        about my time in this great institution, that made me
                        into a complete Adult. As an Engineering Student
                        Learning in Futminna was great and exciting. I learnt
                        loads of cool stuff.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={tab ? 'hidden' : 'info'}>
                <div className='tabcontent'>
                  <div className='timeline'>
                    <div className='timelineitem'>
                      <div className='date'>
                        <span>2021 - till date</span>
                      </div>
                      <div className='degree'>
                        Freelance Frontend Dev |
                        <span> Upwork, Fiverr, Others</span>
                      </div>
                      <div className='bio'>
                        Just random freelance jobs here and there.
                      </div>
                    </div>
                    <div className='timelineitem'>
                      <div className='date'>
                        <span>Jan 2018 - June 2018</span>
                      </div>
                      <div className='degree'>
                        Electrical Engineer |
                        <span>
                          {' '}
                          PPDU, Federal University of Technology Minna
                        </span>
                      </div>
                      <div className='bio'>
                        Did a 6 months internship here, where I improved on my
                        Electrical skills. Wrath wonders here with autocad
                        Electrical.
                      </div>
                    </div>
                    <div className='timelineitem'>
                      <div className='date'>
                        <span>Dec 2020 - till date</span>
                      </div>
                      <div className='degree'>
                        Network Engineer |
                        <span> VDT Communications Limited</span>
                      </div>
                      <div className='bio'>
                        Network design, Bandwidth testing, Site Survey, Radio
                        configuration, Link deployment, name it.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='btn'>
              <div className='btns btnL'>
                <a href='resume.pdf' download>
                  Download Resume
                </a>
              </div>
              <div className='btns'>
                <Button to='/contact'>Contact Me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
