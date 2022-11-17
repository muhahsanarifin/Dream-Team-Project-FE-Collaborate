import React from 'react';

//import ant design
import { Checkbox } from 'antd';

//import css
import styles from '../styles/CardWhislist.module.css';

//import image
import icon_kursi from '../assets/icon_kursi.png';

function CardProduct() {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <div className={styles['content-product']}>
        <img className={styles['icon_product']} src={icon_kursi} alt="icon_kursi" />
        <div className={styles['name_product']}>Dining Side Chair in Beige</div>
        <Checkbox className={`${styles['icon_ceklis']}`} onChange={onChange}></Checkbox>
        <div className={styles['stock']}>In Stock</div>
        <div className={styles['price']}>$765.99</div>
        <button className={styles['cart']}>Add to cart</button>
      </div>
    </>
  );
}

export default CardProduct;
