import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 flex justify-center my-4">
      <div className="bg-white rounded-full px-6 shadow-md inline-flex items-center w-auto border border-gray">
        <div className="flex justify-center items-center h-10">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="/" passHref>
                <p className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link href="/features" passHref>
                <p className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </p>
              </Link>
            </li>
            <li>
              <Link href="/pricing" passHref>
                <p className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </p>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <p className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
