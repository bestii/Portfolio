import { Timeline } from '@/app/components';
import { getExperience } from '@/app/services';
import { FC } from 'react';

import './Experience.scss';

const Experience: FC = async () => {
  const response = await getExperience();
  const experience = await response.json();
  return (
    <section id='experience' className='experience my-10 md:my-32'>
      <div className='experience-header mb-10'>
        <h2>{experience.title}</h2>
        <div
          className='line line-horizontal line-heading'
          aria-hidden='true'
        ></div>
        <p className='experience-header-p max-w-xs text-base'>
          {experience.description}
        </p>
      </div>
      <div className='experience-grid flex flex-wrap'>
        <Timeline timeline={experience.education} />
        <Timeline timeline={experience.profession} />
      </div>
    </section>
  );
};

export default Experience;
