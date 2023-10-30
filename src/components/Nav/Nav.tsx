import './nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
