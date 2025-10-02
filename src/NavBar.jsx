import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-10 py-6 md:px-24 md:py-12 border-b border-textLight/30 dark:border-textDark/30">
      <h3 className="text-2xl font-bold">Romen</h3>

      <ul className="hidden md:flex text-lg gap-12">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <button className="md:hidden" onClick={() => setIsOpen(true)}>
        <img src="menu.svg" alt="Menu Button" className="w-10" />
      </button>

      <div
        className={`z-10 fixed inset-0 bg-black/20 transition-opacity duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-dvh w-[175px] bg-bgLight dark:bg-bgDark p-4 shadow-lg
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="grid grid-rows-3 gap-6 justify-items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
