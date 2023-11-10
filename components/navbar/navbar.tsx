// components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 top-0 w-screen p-4 bg-slate-500 text-white">
      <div className="max-w-7xl container flex items-center justify-between mx-auto">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <div className='font-semibold text-slate-950 text-xl'>Letscode</div>
            </Link>
          </li>
          <li>
            <Link href="/problemset/all">
              <div>Problems</div>
            </Link>
          </li>
          <li>
            <Link href="/">
              <div>Contact</div>
            </Link>
          </li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/"><div>photo</div></Link>
          </li>
          <li>
            <Link href="/"><div>streak</div></Link>
          </li>
          <li>
            <Link href="/"><div>other</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;