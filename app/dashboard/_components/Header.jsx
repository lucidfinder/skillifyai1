'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image
        src={'/LOGO1.PNG'}
        width={350}
        height={300}
        alt='logo'
        className='ml-5'
      />
      <ul className='hidden md:flex gap-6'>
        <Link href={'/dashboard'}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/dashboard/' && 'text-primary font-bold'}`}
          >
            Dashboard
          </li>
        </Link>
        <Link href={'/resume'}>
          <li
            className={`hover:text-primary hover:font-bold transition-all cursor-pointer
        ${path == '/resume/' && 'text-primary font-bold'}`}
          >
            Resume
          </li>
        </Link>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
