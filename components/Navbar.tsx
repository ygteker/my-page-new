import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="bg-white rounded-full px-6 shadow-md inline-flex items-center w-auto border border-gray">
        <div className="flex justify-center items-center h-10">
          <ul className="hidden md:flex space-x-4">
            <li>
              <MyLink text="About" link="/" />
            </li>
            <li>
              <MyLink text="Resume" link="/resume" />
            </li>
            <li>
              <MyLink text="Projects" link="/projects" />
            </li>
            <li>
              <MyLink text="Uses" link="/uses" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
