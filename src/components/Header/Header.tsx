import './header.scss';
import Home from '../../assets/images/home.png';
import About from '../../assets/images/about.png';
import Service from '../../assets/images/service.png';
import Blog from '../../assets/images/blog.png';
import Nav from '../Nav/Nav';

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <a className="logo" href="#">
              Recyworld
            </a>
            <Nav />
          </div>
        </div>
      </header>
      <div className="mobile-nav">
        <ul>
          <li>
            <a href="#">
              <img src={Home} alt="" />
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              <img src={About} alt="" />
              About Us
            </a>
          </li>
          <li>
            <a href="#service">
              <img src={Service} alt="" />
              Service
            </a>
          </li>
          <li>
            <a href="#blog">
              <img src={Blog} alt="" />
              Blog
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
