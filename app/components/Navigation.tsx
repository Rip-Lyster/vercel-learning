'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Navigation() {
    return (
      <nav className={`flex gap-6 items-center justify-center p-4 ${montserrat.className}`}>
        <Link 
          href="/" 
          className="grungy-link"
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="grungy-link"
        >
          About
        </Link>
      </nav>
    );
  }