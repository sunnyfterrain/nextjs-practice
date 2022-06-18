import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>About</a>
      </Link>
    </nav>
  );
};

export default NavBar;
