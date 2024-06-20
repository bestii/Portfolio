import { getIntroduction } from '@/app/services';
import { FC } from 'react';

import './Introduction.scss';

const Introduction: FC = async () => {
  const response = await getIntroduction();
  const experience = await response.json();
  return (
    <section id='introduction' className='introduction mb-10'>
      <div className='container-fluid'>
        <div className='flex flex-wrap'>
          <div className='intro-content relative z-0 px-4 lg:left-16 lg:mt-16 lg:px-0'>
            <div className='relative mt-7 flex items-center lg:left-14'>
              <div className='intro-text text-xl'>{experience.introText}</div>
              <div className='intro-line relative flex-1'>
                <span className='line line-horizontal absolute left-2 right-0 top-0.5'></span>
              </div>
            </div>

            <h1 className='site-title my-2'>
              <strong>{experience.name}</strong>
              {experience.caption}
            </h1>

            <div className='intro-box bg-shadow relative mb-4 mt-7 rounded-sm p-7 lg:mb-0 lg:ml-7'>
              <p className='site-subtitle mb-7 max-w-lg text-xl'>
                {experience.description}
              </p>
            </div>
          </div>
          <div className='intro-img m-0'>
            {/* <picture>
          <source media="(max-width:425px)" srcset="@/assets/img/site-banner-small.jpg">
          <source media="(min-width:425px)" srcset="@/assets/img/site-banner.jpg">
          <img src="@/assets/img/site-banner.jpg" width="1200" height="800"
            alt="A table with laptop, pen, notebook, mobile and coffee" />
        </picture> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
