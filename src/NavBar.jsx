function NavBar() {
  return (
    <nav className="flex justify-between items-center px-24 py-12 border-b border-[#EEEEEE1A]">
      <h3 className="text-2xl font-bold">SaulDesign</h3>
      <ul className="flex text-lg gap-12">
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
    </nav>
  );
}

export default NavBar;
