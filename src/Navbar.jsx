function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🐧 <span>Mac Tech</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#latest">Latest</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
      </div>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;