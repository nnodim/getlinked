import Nav from '../components/Nav';
import RegisterButton from '../components/RegisterButton';
import useImages from '../hooks/useImages';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://backend.getlinked.ai/';

const Contact = () => {
  const {
    instgram,
    x,
    facebook,
    linkedin,
    star,
    starpu,
    purpleLens4,
    purpleLens5,
    back,
  } = useImages();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = { first_name: name, email, message };
    try {
      const res = await axios.post(`${BASE_URL}hackathon/contact-form`, data);
      console.log(res);
      setIsLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  return (
    <>
      <Nav />
      <main className='relative font-mono'>
        <Link
          className='cursor-pointer z-10 absolute mt-10 ml-10 lg:hidden'
          to='/'
        >
          <img
            src={back}
            alt=''
          />
        </Link>
        <img
          src={purpleLens4}
          alt=''
          className='w-[50rem] -top-20 lg:top-0 left-0 absolute opacity-40 z-0'
        />
        <img
          src={purpleLens5}
          alt=''
          className='absolute hidden lg:block w-[40rem] bottom-0 opacity-50 right-0 z-0'
        />
        <div className='py-[4rem] lg:py-[8rem] flex flex-col-reverse lg:flex-row items-center justify-evenly'>
          <div className='text-center lg:text-left relative lg:mt-20 max-w-fit flex i flex-col gap-9'>
            <img
              src={starpu}
              alt=''
              className='absolute left-10 -top-28 w-5'
            />
            <div className='hidden lg:block'>
              <h1 className='pb-4 text-[2rem] text-color-3 font-semibold'>
                Get in touch
              </h1>
              <p className='pb-4 text-[1rem] text-white font-mono'>
                Contact <br /> Information
              </p>
              <p className='pb-4 text-[1rem] text-white font-mono'>
                27,Alara Street <br /> Yaba 100012 <br />
                Lagos State
              </p>
              <p className=' pb-4 text-[1rem] text-white font-mono'>
                Call Us : 07067981819
              </p>
              <p className='pb-4 text-[1rem] text-white font-mono'>
                we are open from Monday-Friday <br /> 08:00am - 05:00pm
              </p>
            </div>
            <div className='mx-auto lg:mx-0 flex flex-col gap-4'>
              <h3 className='font-semibold text[1rem] leading-6 text-color-3'>
                Share on
              </h3>
              <ul className='flex items-center gap-4'>
                <li>
                  <a href='#'>
                    <img
                      src={instgram}
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src={x}
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src={facebook}
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <img
                      src={linkedin}
                      alt=''
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='relative lg:rounded lg:shadow-card w-full max-w-md lg:w-[38.5625rem] lg:p-20 p-9 lg:bg-background-color-1'>
            <img
              src={starpu}
              alt=''
              className='absolute w-5 bottom-48 left-0'
            />
            <img
              src={star}
              alt=''
              className='absolute w-5 top-0 lg:-top-20 right-6'
            />
            <img
              src={star}
              alt=''
              className='absolute w-5 bottom-0 -right-20 hidden lg:block'
            />
            <h2 className='font-clash text-xl font-semibold text-color-3'>
              Questions or need assistance?
            </h2>
            <h2 className='font-clash text-xl font-semibold text-color-3 pb-4'>
              Let us know about it!
            </h2>
            <p className='text-white font-mono text-sm lg:hidden py-4'>
              Email us below to any question related to our event
            </p>
            <form onSubmit={handleSubmit}>
              <label
                htmlFor='firstName'
                className='hidden'
              >
                First Name
              </label>
              <input
                required
                type='text'
                name='firstName'
                id='firstName'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='First Name'
                className='bg-background-color-1 border text-white rounded-xl bg-none px-5 w-full py-4 placeholder:text-white font-mono my-4 lg:my-10'
              />
              <input
                required
                type='email'
                name='mail'
                id='mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Mail'
                className='bg-background-color-1 border text-white rounded-xl bg-none px-5 w-full py-4 placeholder:text-white font-mono my-4 lg:my-10'
              />
              <textarea
                required
                name='message'
                id='message'
                cols='30'
                rows='10'
                placeholder='Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='bg-background-color-1 border text-white rounded-xl bg-none px-5 w-full py-4 placeholder:text-white font-mono my-4 lg:my-10'
              ></textarea>
              <div className='max-w-fit mx-auto'>
                <RegisterButton
                  type={'submit'}
                  text={isLoading ? 'Sending...' : 'Submit'}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
