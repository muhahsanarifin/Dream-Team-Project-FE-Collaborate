import React, { Component } from 'react';

//import css
import styles from '../styles/Whislist.module.css';

//import compoenent
import Footer from '../components/Footer';
import Header from '../components/Header';
import CardWhislist from '../components/CardWhislist';

class Whislist extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <section>
            <div className={styles['content']}>
              <div className={styles['whislist']}>
                Whislist <span className={styles['arrow']}>{'>'}</span>
              </div>
              <div className={styles['content-whislist']}>Whislist</div>
              <p className={styles['text']}>Pay and get your ordered items</p>
            </div>
            <div className={`${styles['content-border']} container`}>
              <div className={styles['line-top']}></div>
              <div className={styles['text-product']}>
                <div className={styles['']}>Product</div>
                <div className={styles['text-stock']}>Stock Status</div>
                <div className={styles['text-price']}>Price</div>
              </div>
              <div className={styles['content-border-botom']}></div>
              <CardWhislist />
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default Whislist;
