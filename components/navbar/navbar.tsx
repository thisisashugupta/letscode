// components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black-500 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4 text-blue">
          <li>
            <Link href="/">
              Letscode
            </Link>
          </li>
          <li>
            <Link href="/problemset/all">
              Problems
            </Link>
          </li>
          <li>
            <Link href="/">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;