const Header = () => {
  return (
    <header className="header z-10">
      <div className="flex flex-wrap items-center justify-between container px-4 py-6 mx-auto">
        <div className="flex items-center">
          <a className="font-logo ml-3 text-white uppercase text-sm md:text-lg" href="/">
            Poker Faces
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;