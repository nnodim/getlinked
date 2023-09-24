import logo from '../assets/getlinked.svg';
import bar from '../assets/bar.svg';
import RegisterButton from './RegisterButton';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className='pt-10 pb-4'>
      <nav className='px-10  lg:px-32 flex justify-between '>
        <Link to='/'>
          <img
            src={logo}
            alt='logo'
          />
        </Link>
        <div className='py-4 hidden lg:block'>
          <ul className='flex items-center justify-between gap-x-12'>
            <div className='flex items-center gap-x-10'>
              <li className='text-white'>
                <a href='#timeline'>Timeline</a>
              </li>
              <li className='text-white'>
                <a href='#overview'>Overview</a>
              </li>
              <li className='text-white'>
                <a href='#faqs'>FAQs</a>
              </li>
              <li className='text-white'>
                <Link to='/contact'>Contact</Link>
              </li>
            </div>
            <div>
              <Link
                to='/register'
                className='text-center inline-block rounded w-40 px-6 py-4 text-base font-medium uppercase leading-normal text-white transition duration-150 ease-in-out
      bg-gradient-1'
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
        <img
          className='lg:hidden'
          src={bar}
          alt=''
        />
      </nav>
    </header>
  );
};

export default Nav;
