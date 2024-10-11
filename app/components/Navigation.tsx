'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function Navigation() {
    return (
      <nav className={`flex gap-6 items-center justify-center p-4 ${montserrat.className}`}>
        <div className="align-bottom text-2xl font-[family-name:var(--font-symbols-regular)] mr-4">
          gym bacteria
        </div>
        <Link 
          href="/" 
          className="bacteria-link"
        >
          Home
        </Link>
        <Link 
          href="/about" 
          className="bacteria-link"
        >
          About
        </Link>
      </nav>
    );
  }