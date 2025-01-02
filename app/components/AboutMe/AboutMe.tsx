import { getAboutMe } from '@/app/services';
import { FC } from 'react';

import { imgPortrait } from '@/app/assets';
import Image from 'next/image';
import './AboutMe.scss';

const AboutMe: FC = async () => {
  const response = await getAboutMe();
  const aboutMe = await response.json();

  return (
    <section id='about' className='about my-10 md:my-32'>
      <div className='about-header mb-10'>
        <h2>{aboutMe.title}</h2>
        <div
          className='line line-horizontal line-heading'
          aria-hidden='true'
        ></div>
        <p className='about-header-p'>{aboutMe.description}</p>
      </div>
      <div className='flex flex-wrap'>
        <div className='about-me-img relative mb-20 md:mb-0'>
          <div className='img-bg absolute'></div>
          <Image
            src={imgPortrait}
            className='portrait-img relative'
            alt='Bestin John potrait image'
            width={645}
            height={860}
          />
        </div>
        <div className='about-me-content'>
          <p>{aboutMe.mainDescription1}</p>
          <p>{aboutMe.mainDescription2}</p>
          <br />
          <div className='skill-list'>
            <h3>Skills List</h3>
            <div className='about-me-skill-list flex'>
              <ul className='dash-list'>
                {aboutMe.skillList1.map((skill: string) => (
                  <li className='dash-list-item' key={skill}>
                    <span className='dash-list-dash' aria-hidden='true'></span>
                    {skill}
                  </li>
                ))}
              </ul>
              <ul className='dash-list'>
                {aboutMe.skillList2.map((skill: string) => (
                  <li className='dash-list-item' key={skill}>
                    <span className='dash-list-dash' aria-hidden='true'></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='skill-bar'>
            <h3>Skills Bar</h3>
            <ul className=''>
              <li className='skill-bar'>
                <div className='skill-bar-title'>
                  <span>HTML</span>
                  <span className='skill-bar-value'>90%</span>
                </div>
                <div className='skill-bar-bg' aria-hidden='true'>
                  <div
                    className='skill-bar-amount bar-90'
                    data-skill-bar-amount='90'
                  ></div>
                </div>
              </li>
              <li className='skill-bar'>
                <div className='skill-bar-title'>
                  <span>CSS</span>
                  <span className='skill-bar-value'>80%</span>
                </div>
                <div className='skill-bar-bg' aria-hidden='true'>
                  <div
                    className='skill-bar-amount bar-80'
                    data-skill-bar-amount='80'
                  ></div>
                </div>
              </li>
              <li className='skill-bar'>
                <div className='skill-bar-title'>
                  <span>TypeScript</span>
                  <span className='skill-bar-value'>95%</span>
                </div>
                <div className='skill-bar-bg' aria-hidden='true'>
                  <div
                    className='skill-bar-amount bar-95'
                    data-skill-bar-amount='95'
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
