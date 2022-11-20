import React from 'react';

//import components
import Footer from '../components/Footer';
import Header from '../components/Header';

//import css
import styles from '../styles/ContactUs.module.css';

//import image
import Icon_map from '../assets/Icon_map.png';

function ContactUs() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={styles['content']}>
            <div className={styles['contact_left']}>
              FAQ <span className={styles['contact_row']}>{'>'}</span> <span className={styles['contact_us']}>Contact Us</span>
              <p className={styles['content_title']}>Contact Us</p>
            </div>
          </div>
          <div className={styles['content_second']}>
            <div className={styles['content_map']}>
              <img className={styles['img_map']} src={Icon_map} alt="Icon_map" />
            </div>
            <div className={styles['content_input']}>
              <label className={styles['contact_label']}>Name *</label>
              <input className={styles['contact_input']} type="text" placeholder=""></input>
              <br />
              <label className={styles['contact_label']}>Your Email *</label>
              <input className={styles['contact_input']} type="email" placeholder=""></input>
              <br />
              <label className={styles['contact_label']}>Your Website *</label>
              <input className={styles['contact_input']} type="text" placeholder=""></input>
              <br />
              <label className={styles['contact_label']}>Business Plan *</label>
              <input className={styles['contact_input']} type="text" placeholder=""></input>
              <br />
              <label className={styles['contact_label']}>Message *</label>
              <input className={styles['contact_input_message']} type="text" placeholder=""></input>
              <button className={styles['send_message']}>Send Message</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ContactUs;
