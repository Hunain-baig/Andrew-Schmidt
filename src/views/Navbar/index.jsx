import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-20">
      <div>
        <h1 className="text-6xl text-center font-semibold tracking-[0.2em] text-[121212]">
          ANDREW SCHMIDT
        </h1>
      </div>

      <div className="hidden lg:flex justify-center items-center my-10 space-x-5">
        <p>WORK</p>
        <p>POSTS</p>
        <p>ABOUT</p>
      </div>

      <div className="dropdown lg:hidden">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1"
          onClick={toggleDropdown}
        >
          Menu
        </div>
        {isOpen && (
          <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <a>WORK</a>
            </li>
            <li>
              <a>POSTS</a>
            </li>
            <li>
              <a>ABOUT</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
