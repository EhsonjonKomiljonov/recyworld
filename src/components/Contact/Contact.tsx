import GreenBtn from '../GreenBtn/GreenBtn';
import './contact.scss';

const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <div className="container">
        <div className="contact__inner">
          <h2>Ready to Make Sacrifices For a Clean and Green Environment</h2>
          <GreenBtn text='Get Join Now' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
