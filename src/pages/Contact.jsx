import instgram from '../assets/mdi-instagram.svg';
import x from '../assets/x.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/ri-linkedin-fill.svg';
import Nav from '../components/Nav';
import RegisterButton from '../components/RegisterButton';
import purpleLens4 from '../assets/Purple-Lens-Flare2.svg';
import purpleLens5 from '../assets/Purple-Lens-Flare3.svg';
import star from '../assets/star.png';
import starpu from '../assets/star-pu.png';
import back from '../assets/back.svg';

const Contact = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <Nav />
      </div>
      <main className='relative'>
        <img
          src={back}
          alt=''
          className='absolute top-10 left-10 lg:hidden'
        />
        <img
          src={purpleLens4}
          alt=''
          className='w-[50rem] -top-20 lg:top-0 left-0 absolute opacity-40'
        />
        <img
          src={purpleLens5}
          alt=''
          className='absolute hidden lg:block w-[40rem] bottom-0 opacity-50 right-0'
        />
        <div className=' py-[4rem] lg:py-[8rem] flex flex-col-reverse lg:flex-row items-center justify-evenly'>
          <div className='text-center relative lg:mt-20 max-w-fit flex i flex-col gap-9'>
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
            <div className='mx-auto flex flex-col gap-4'>
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
          <div className='relative lg:rounded lg:shadow-card w-full lg:w-[38.5625rem] lg:p-20 p-9 lg:bg-background-color-1'>
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
            <label
              htmlFor='firstName'
              className='hidden'
            >
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='First Name'
              className='bg-background-color-1 border text-white rounded-xl bg-none px-5 w-full py-4 placeholder:text-white font-mono my-4 lg:my-10'
            />
            <input
              type='text'
              name='mail'
              id='mail'
              placeholder='Mail'
              className='bg-background-color-1 border text-white rounded-xl bg-none px-5 w-full py-4 placeholder:text-white font-mono my-4 lg:my-10'
            />
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Message'
              className='bg-background-color-1 border text-white rounded-xl bg-none px-5 w-full py-4 placeholder:text-white font-mono my-4 lg:my-10'
            ></textarea>
            <div className='max-w-fit mx-auto'>
              <RegisterButton text={'Submit'} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
