import React from 'react'

import css from '../styles/CardProductDetailsTest.module.css'

import list_product_3 from '../assets/Mask.png'
import { useSelector } from 'react-redux'

export default function CardProductDetail() {
    const image = useSelector((state) => state.products.productsDetails.images)
    return (
        <>
            <div className={`container ${css['desc-bar']}`}>
                <div className={`row ${css['content-bar-description']}`}>
                    <div className={`col-lg-5 col-md-12 col-sm-12 ${css['image-description']}`}>
                        <img src={image[0]} alt="product_image" />
                    </div>
                    <div className={`col-lg-7 col-md-12 col-sm-12 ${css['image-description_1']}`}>
                        <p>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                        <ul className={`${css.style_li}`}>
                            <li>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</li>
                            <li>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                        </ul>
                        <p>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accum</p>
                    </div>
                </div>
                <p className={`${css.relate}`}>Related Products</p>
                <div className={`row ${css['relate-1']}`}>
                    <div className={`col-lg-4 col-md-12 col-sm-12 ${css['relate-2']}`}>
                        <img src={list_product_3} alt="product" />
                        <p className={`${css.type}`}>Coaster 506222-CO Loveseat</p>
                        <p className={`${css.type_price}`}>$765.99</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 col-sm-12 ${css['relate-2']}`}>
                        <img src={list_product_3} alt="product" />
                        <p className={`${css.type}`}>Coaster 506222-CO Loveseat</p>
                        <p className={`${css.type_price}`}>$765.99</p>
                    </div>
                    <div className={`col-lg-4 col-md-12 col-sm-12 ${css['relate-2']}`}>
                        <img src={list_product_3} alt="product" />
                        <p className={`${css.type}`}>Coaster 506222-CO Loveseat</p>
                        <p className={`${css.type_price}`}>$765.99</p>
                    </div>
                </div>
                <div className={`${css['circle']}`}>
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-regular fa-circle"></i>
                    <i className="fa-regular fa-circle"></i>
                </div>
            </div>
        </>
    )
}