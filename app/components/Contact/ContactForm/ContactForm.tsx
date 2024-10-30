'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactFormSchema, ContactFormValues } from './contactFormSchema';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    mode: 'onChange',
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    reset();
  };
  return (
    <div className='contact-form bg-shadow'>
      <form
        className='form-contact relative px-5 py-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-group'>
          <p>All fields are required.</p>
        </div>
        <div className='flex flex-wrap'>
          <div className='form-group form-name w-full'>
            <label className='form-label mb-2 inline-block' htmlFor='form-name'>
              Name
            </label>
            <input
              className='form-control form-field'
              type='text'
              id='form-name'
              data-error-message='Name is a require field.'
              aria-required='true'
              {...register('name')}
            />
            <span
              className={`mt-2 block h-6 text-red-500 ${errors.name ? 'visible' : 'invisible'}`}
            >
              {errors.name?.message}
            </span>
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
              data-error-message='Insert a valid e-mail.'
              aria-required='true'
              {...register('email')}
            />
            <span
              className={`mt-2 block h-6 text-red-500 ${errors.email ? 'visible' : 'invisible'}`}
            >
              {errors.email?.message}
            </span>
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
            data-error-message='Message is a require field.'
            aria-required='true'
            {...register('message')}
          ></textarea>
          <span
            className={`mt-2 block h-6 text-red-500 ${errors.message ? 'visible' : 'invisible'}`}
          >
            {errors.message?.message}
          </span>
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
  );
};

export default ContactForm;
