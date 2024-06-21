import { getContact } from '@/app/services';
import {
  faAt,
  faLocationDot,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import './Contact.scss';

const Contact: FC = async () => {
  const response = await getContact();
  const contact = await response.json();

  return (
    <section id='contact' className='contact mb-10'>
      <div className='contact-header mb-10'>
        <h2>{contact.title}</h2>
        <div
          className='line line-horizontal line-heading'
          aria-hidden='true'
        ></div>
        <p className='contact-header-p'>{contact.description}</p>
      </div>
      <div className='flex flex-wrap'>
        <div className='contact-details'>
          <div className='contact-info mb-8 flex'>
            <div className='contact-info-icon relative top-0.5 mr-4 flex h-6 items-center'>
              <FontAwesomeIcon icon={faAt} />
            </div>
            <span className='contact-info-text'>
              <p>
                {contact.email}
                <span className='hidden'>null</span>.com
              </p>
            </span>
          </div>
          <div className='contact-info mb-8 flex'>
            <div className='contact-info-icon relative top-0.5 mr-4 flex h-6 items-center'>
              <FontAwesomeIcon icon={faMobileScreen} />
            </div>
            <span className='contact-info-text'>{contact.mobile}</span>
          </div>
          <div className='contact-info mb-8 flex'>
            <div className='contact-info-icon relative top-0.5 mr-4 flex h-6 items-center'>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <span className='contact-info-text'>{contact.address}</span>
          </div>
        </div>
        <div className='contact-form bg-shadow'>
          <form className='form-contact relative px-5 py-5'>
            <div className='form-group'>
              <div
                id='form-live-region'
                className='form-message rounded'
                role='alert'
                aria-atomic='true'
                data-error-instruction='There were some issues with the form submission'
              >
                <p>
                  <strong>Please correct the following error(s):</strong>
                  {/* <ul><li v-for='error in errors'>{{ error }}</li></ul> */}
                </p>
              </div>
            </div>
            <div className='form-group'>
              <p>All fields are required.</p>
            </div>
            <div className='flex flex-wrap'>
              <div className='form-group form-name w-full'>
                <label
                  className='form-label mb-2 inline-block'
                  htmlFor='form-name'
                >
                  Name
                </label>
                <input
                  className='form-control form-field'
                  type='text'
                  id='form-name'
                  name='name'
                  data-error-message='Name is a require field.'
                  aria-required='true'
                />
              </div>
              <div className='form-group form-email w-full'>
                <label
                  className='form-label mb-2 inline-block'
                  htmlFor='form-email'
                >
                  Email
                </label>
                <input
                  className='form-control form-field'
                  type='email'
                  id='form-email'
                  name='email'
                  data-error-message='Insert a valid e-mail.'
                  aria-required='true'
                />
              </div>
            </div>
            <div className='form-group'>
              <label
                className='form-label mb-2 inline-block'
                htmlFor='form-message'
              >
                Message
              </label>
              <textarea
                className='form-control form-field h-auto'
                id='form-message'
                rows={5}
                name='message'
                data-error-message='Message is a require field.'
                aria-required='true'
              ></textarea>
            </div>
            <div className='form-group flex justify-end'>
              <button
                type='submit'
                id='contact-form__submit-button'
                className='button button-default'
              >
                <span className='button-text line-underline'>Submit</span>
                <span className='button-spinner spinner-dual-ring'>
                  <span></span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
