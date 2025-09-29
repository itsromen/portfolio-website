function NavBar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 md:px-24 md:py-12 border-b border-[#EEEEEE1A]">
      <h3 className="text-2xl font-bold">SaulDesign</h3>
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
      <button className="md:hidden">
        <img src="menu.svg" alt="Menu Button" className="w-10" />
      </button>
    </nav>
  );
}

export default NavBar;
