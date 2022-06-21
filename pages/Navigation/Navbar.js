/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'
import Avatar from './Avatar';
import styles from '../../styles/Nav.module.css';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-white p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
          <Image
      src={"/PhaseLogo.png"}
      alt="Picture of the author"
      width="100px"
      height="50px"
    />
  
    
            <span className='text-xl text-black font-bold uppercase tracking-wide'>
            
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 rounded lg:hidden text-black ml-auto hover:text-blue-400 outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto  '>
            <Link href='/'>
              <a className='test lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline   '>
                Home
              </a>
            </Link>
            <Link href='/Incomepage'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline'>
                inkomsten
              </a>
            </Link>
            
            
            <Link href='Outcoming/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline '>
                uitgaven
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline'>
                totaal
              </a>
            </Link>
            <Link href='/Formtest'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:underline '>
                invoeren
              </a>
            </Link>
            
          </div>
          
        </div>
        <br>
        </br>
        < Avatar />
      </nav>
    </>
  );
};