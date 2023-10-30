import './header.scss';
import Home from '../../assets/images/home.png';
import About from '../../assets/images/about.png';
import Service from '../../assets/images/service.png';
import Blog from '../../assets/images/blog.png';
import Nav from '../Nav/Nav';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__inner">
            <motion.a
              initial={{ scale: 1, rotateX: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                rotateX: [0, 180, 0],
                transition: { duration: 1, delay: 1 },
              }}
              className="logo"
              href="#"
            >
              Recyworld
            </motion.a>
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
