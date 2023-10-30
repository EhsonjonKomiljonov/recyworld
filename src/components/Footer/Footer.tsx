import Nav from '../Nav/Nav';
import './footer.scss';
import Twitter from '../../assets/images/twitter.svg';
import Insta from '../../assets/images/instagram.svg';
import YouTube from '../../assets/images/youtube.svg';
import Facebook from '../../assets/images/Facebook.svg';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <h2>Recyworld</h2>
          <Nav />
          <ul className="site-footer__socials">
            <motion.li
              initial={{ scale: 1 }}
              whileInView={{
                scale: [1, 1.3, 1],
                transition: { duration: 0.5, delay: 0 },
              }}
            >
              <a href="https://twitter.com">
                <img src={Twitter} alt="Twitter icon" width={25} height={25} />
              </a>
            </motion.li>
            <motion.li
              initial={{ scale: 1 }}
              whileInView={{
                scale: [1, 1.3, 1],
                transition: { duration: 0.5, delay: 0.25 },
              }}
            >
              <a href="https://instagram.com">
                <img src={Insta} alt="Instagram icon" width={25} height={25} />
              </a>
            </motion.li>
            <motion.li
              initial={{ scale: 1 }}
              whileInView={{
                scale: [1, 1.3, 1],
                transition: { duration: 0.5, delay: 0.5 },
              }}
            >
              <a href="https://facebook.com">
                <img
                  src={Facebook}
                  alt="Facebook icon"
                  width={25}
                  height={25}
                />
              </a>
            </motion.li>
            <motion.li
              initial={{ scale: 1 }}
              whileInView={{
                scale: [1, 1.3, 1],
                transition: { duration: 0.5, delay: 0.75 },
              }} 
            >
              <a href="https://youtube.com">
                <img src={YouTube} alt="YouTube icon" width={25} height={25} />
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom bottom">
        <div className="container">
          <div className="bottom__left">
            <a href="#">Privacy</a>
            <a href="#">Terms and condition</a>
          </div>
          <div className="bottom__right">
            <small>&copy; 2003 Ali Lorem ipsum dolor</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
