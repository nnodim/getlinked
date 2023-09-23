import logo from '../assets/getlinked.svg';
import bar from '../assets/bar.svg';
import RegisterButton from './RegisterButton';

const Nav = () => {
  return (
    <header className='pt-10 pb-4'>
      <nav className='px-10  lg:px-32 flex justify-between '>
        <img
          src={logo}
          alt='logo'
        />
        <div className='py-4 hidden lg:block'>
          <ul className='flex items-center gap-x-12'>
            <li className='text-white'><a href="#timeline">Timeline</a></li>
            <li className='text-white'><a href="#overview">Overview</a></li>
            <li className='text-white'><a href="#faqs">FAQs</a></li>
            <li className='text-white'>Contact</li>
            <li className='text-white ml-28'>
              <RegisterButton text='Register' />
            </li>
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
