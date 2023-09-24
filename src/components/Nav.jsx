import logo from '../assets/getlinked.svg';
import bar from '../assets/bar.svg';
import close from '../assets/close.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navigation = [
  { name: 'Timeline', href: '#timeline' },
  { name: 'Overview', href: '#overview' },
  { name: 'FAQs', href: '#faqs' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='pt-10 pb-4 relative z-10'>
      <nav className='px-10 lg:px-32 flex justify-between items-center font-mono'>
        <Link to='/'>
          <img
            src={logo}
            alt='logo'
          />
        </Link>
        <div className='py-4 hidden lg:block ml-auto'>
          <ul className='flex items-center justify-between gap-x-12'>
            <div className='flex items-center gap-x-10'>
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className='text-white hover:text-color-3 transition-all duration-200'
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
              <li className='text-white hover:text-color-3 transition-all duration-200'>
                <Link to='/contact'>Contact</Link>
              </li>
            </div>
            <div>
              <Link
                to='/register'
                className='text-center inline-block rounded w-40 px-6 py-4 text-base font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-gradient-1 hover:animate-pulse'
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
        <div className={isOpen ? 'z-50 lg:hidden fixed top-0 right-0 bg-color-1 w-full max-w-sm h-full p-10' : 'hidden'}>
          <button type='button' className='ml-auto block' onClick={() => setIsOpen(!isOpen)}>
          <img
            src={close}
            alt=''
          />
          </button>
          <ul className='mt-[3rem] flex flex-col justify-between gap-y-12'>
            <div className='flex flex-col gap-y-10'>
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className='text-white hover:text-color-3 transition-all duration-200'
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
              <li className='text-white hover:text-color-3 transition-all duration-200'>
                <Link to='/contact'>Contact</Link>
              </li>
            </div>
            <div>
              <Link
                to='/register'
                className='text-center inline-block rounded w-40 px-6 py-4 text-base font-medium uppercase leading-normal text-white transition duration-150 ease-in-out bg-gradient-1 hover:animate-pulse'
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
        <button type='button' onClick={() => setIsOpen(!isOpen)}>
        <img
          className='lg:hidden'
          src={bar}
          alt=''
        />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
