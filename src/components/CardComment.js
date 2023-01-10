import React from 'react'

import styles from '../styles/CardComment.module.css'
import icon_bani from '../assets/icon_bani.png'
import icon_hana from '../assets/icon_hana.png'
import icon_hani from '../assets/icon_hani.png'
import icon_rachel from '../assets/icon_rachel.png'

function CardComment() {
    return (
        <>
            <div className={styles["content-all"]}>
                <div className={styles["border_comment"]}>
                    <div className={styles["content_img_comment"]}>
                        <div className={styles["wrapper-img"]}>
                            <img src={icon_hana} alt="icon_hana" />
                        </div>
                        <div className={styles["content_comment_right"]}>
                            <p className={styles["text_comment"]}>
                                "Theme is very flexibel easy to use. Perfect for us.
                                Customer support has been excellent and
                                andswered every question we've trown at them"
                            </p>
                            <p className={styles["text_time_comment"]}>
                                35 mins ago, 15 November 2019{" "}
                                <span className={styles["text_reply"]}>Reply</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["content_img_comment_right"]}>
                        <span className={styles["line_bani"]}></span>
                        <div className={styles["wrapper-img"]}>
                            <img src={icon_bani} alt="icon_bani" />
                        </div>
                        <div className={styles["content_comment_right"]}>
                            <p className={styles["text_comment"]}>
                                "This theme is indeed a great purchase. Support
                                center is also helpful and quick to answer.
                                No issues so far"
                            </p>
                            <p className={styles["text_time_comment"]}>
                                35 mins ago, 15 November 2019{" "}
                                <span className={styles["text_reply"]}>Reply</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["line_bottom"]}></div>
                    <div className={styles["content_img_comment"]}>
                        <div className={styles["wrapper-img"]}>
                            <img src={icon_hani} alt="icon_hani" />
                        </div>
                        <div className={styles["content_comment_right"]}>
                            <p className={styles["text_comment"]}>
                                "Exceptional service, beatiful and straightforward
                                theme! Can't recommend enough."
                            </p>
                            <p className={styles["text_time_comment"]}>
                                35 mins ago, 15 November 2019{" "}
                                <span className={styles["text_reply"]}>Reply</span>
                            </p>
                        </div>
                    </div>
                    <div className={styles["line_bottom"]}></div>
                    <div className={styles["content_img_comment"]}>
                        <div className={styles["wrapper-img"]}>
                            <img
                                className={styles["icon_rachel"]}
                                src={icon_rachel}
                                alt="icon_rachel"
                            />
                        </div>
                        <div className={styles["content_comment_right"]}>
                            <p className={styles["text_comment"]}>
                                "Highly customizable. Excellent design. Customer
                                services has exceeded my expectation. They
                                are quick to answer and event when they don't know{" "}
                                the answer right away. They'll work with you
                                towards a solution"
                            </p>
                            <p className={styles["text_time_comment"]}>
                                35 mins ago, 15 November 2019{" "}
                                <span className={styles["text_reply"]}>Reply</span>
                            </p>
                        </div>
                    </div>
                </div>
                <p className={styles["leave_comment"]}>Leave A Comment</p>
                <p className={styles["text_address"]}>
                    Your email address will not be published. Require fields
                    are marked
                </p>
                <form className={styles["content_comment"]}>
                    <input
                        className={styles["input_text"]}
                        type="text"
                        placeholder="Name*"
                    />
                    <input
                        className={styles["input_text"]}
                        type="email"
                        placeholder="Email*"
                    />
                    <input
                        className={styles["input_text"]}
                        type="text"
                        placeholder="Website*"
                    />
                </form>
                <div className={styles["input_comment"]}>
                    <input
                        className={styles["input_text_comment"]}
                        type="text"
                        placeholder="Your Comment"
                    />
                </div>
                <button className={styles["send"]}>Send</button>
            </div>
        </>
    )
}

export default CardComment;