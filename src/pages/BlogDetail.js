import React from 'react';

//import css
import styles from '../styles/BlogDetail.module.css';

//import components
import Header from '../components/Header';
import Footer from '../components/Footer';

//import image
import icon_search from '../assets/icon_search.png';
import icon_phone from '../assets/icon_phone.png';
import icon_laptop from '../assets/icon_laptop.png';
import icon_donat from '../assets/icon_donat.png';
import icon_pijar from '../assets/icon_pijar.png';
import icon_banner from '../assets/icon_banner.png';
import img_freshii from '../assets/img_freshii.png';
import Icon_time from '../assets/Icon_time.png';
import icon_tag from '../assets/icon_tag.png';
import img_kitchen from '../assets/img_kitchen.png';
import icon_facebook from '../assets/icon_facebook.png';
import icon_twitter from '../assets/icon_twitter.png';
import icon_youtube from '../assets/icon-youtube.png';
import icon_basket from '../assets/icon_basket.png';
import icon_hana from '../assets/icon_hana.png';
import icon_bani from '../assets/icon_bani.png';
import icon_hani from '../assets/icon_hani.png';
import icon_rachel from '../assets/icon_rachel.png';
import img_chair from '../assets/img_chair.png';
import img_matress from '../assets/img_matress.png';

function BlogDetail() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <div className={`${styles['content']}`}>
              <p className={styles['text_blog']}>
                Blog <span className={styles['text_blog_row']}>{'>'}</span> <span className={styles['text_blog_detail']}>Blog Detail</span>
              </p>
              <div className={styles['blog']}>How to open interior shop?</div>
              <p className={styles['text']}>Read and enjoy content from us</p>
            </div>
            <div className="container">
              <div div className={styles['content_all']}>
                <div className={styles['content_left']}>
                  <div className={styles['search']}>
                    <input className={styles['input_search']} type="text" placeholder="search.." />
                    <img className={styles['icon_search']} src={icon_search} alt="icon_search" />
                  </div>
                  <div className={styles['categories']}>Categories</div>
                  <div className={styles['content_categories']}>
                    <div className={styles['brand_all']}>
                      Furniture <span className={styles['number']}>3</span>
                    </div>
                    <div className={styles['brand_all']}>
                      Interior <span className={styles['number']}>3</span>
                    </div>
                    <div className={styles['brand_all']}>
                      Real Estate <span className={styles['number']}>3</span>
                    </div>
                    <div className={styles['brand_all']}>
                      Construction <span className={styles['number']}>3</span>
                    </div>
                    <div className={styles['brand_all']}>
                      Bussiness <span className={styles['number']}>3</span>
                    </div>
                    <div className={styles['brand_all']}>
                      Industrial <span className={styles['number']}>3</span>
                    </div>
                  </div>
                  <div className={styles['recent_news']}>Recent News</div>
                  <div className={styles['content_recent_news']}>
                    <div className={styles['content_img']}>
                      <div className={styles['img_recent']}>
                        <img src={icon_phone} alt="icon_phone" />
                      </div>
                      <div className={styles['text-recent']}>
                        How To Put Movies On Iphone
                        <p className={styles['text-time']}>24 april 2019 : 45 mins ago</p>
                      </div>
                    </div>
                    <span className={styles['line_recent']}></span>
                    <div className={styles['content_img']}>
                      <div className={styles['img_recent']}>
                        <img src={icon_laptop} alt="icon_laptop" />
                      </div>
                      <div className={styles['text-recent']}>
                        How To Put Movies On Iphone
                        <p className={styles['text-time']}>24 april 2019 : 45 mins ago</p>
                      </div>
                    </div>
                    <span className={styles['line_recent']}></span>
                    <div className={styles['content_img']}>
                      <div className={styles['img_recent']}>
                        <img src={icon_donat} alt="icon_donat" />
                      </div>
                      <div className={styles['text-recent']}>
                        How To Put Movies On Iphone
                        <p className={styles['text-time']}>24 april 2019 : 45 mins ago</p>
                      </div>
                    </div>
                    <span className={styles['line_recent']}></span>
                    <div className={styles['content_img']}>
                      <div className={styles['img_recent']}>
                        <img src={icon_pijar} alt="icon_pijar" />
                      </div>
                      <div className={styles['text-recent']}>
                        How To Put Movies On Iphone
                        <p className={styles['text-time']}>24 april 2019 : 45 mins ago</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles['archives']}>Archives</div>
                  <div className={styles['select_month']}>
                    Select Month <span className={styles['text_v']}>∨</span>
                  </div>
                  <p className={styles['tags']}>Tags</p>
                  <div className={styles['content_tags']}>
                    <div className={styles['content_border_tags']}>furniture</div>
                    <div className={styles['content_border_tags']}>style</div>
                    <div className={styles['content_border_tags']}>life style</div>
                    <div className={styles['content_border_zuka']}>zuka</div>
                    <div className={styles['content_border_online']}>online store</div>
                    <div className={styles['content_border_tags']}>real estate</div>
                  </div>
                  <div className={styles['img_banner']}>
                    <img src={icon_banner} alt="icon_banner" />
                  </div>
                </div>
                <div className={styles['content_right']}>
                  <img src={img_freshii} alt="img_freshii" />
                  <p className={styles['text_shop']}>How to open interior shop?</p>
                  <div className={styles['content_text_time']}>
                    <span className={styles['text_tag']}>
                      <img className={styles['Icon_time']} src={Icon_time} alt="Icon_time" />
                      24 april 2019 : 45 mins ago, by Admin
                    </span>
                    <span className={styles['text_tag']}>
                      <img src={icon_tag} alt="icon_tag" />
                      Kids, Interior, Photos
                    </span>
                  </div>
                  <article>
                    <p className={styles['describe_interior']}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                      totam accusantium numquam maxime quibusdam fugiat autem aliquid natus rerum nam architecto tenetur repudiandae exercitationem doloremque inventore cumque? Vero facilis voluptatum obcaecati, ex id nobis placeat
                      explicabo dolore, quisquam a harum, facere vel quos sequi quas doloremque unde magnam illum ipsam laudantium mollitia inventore! Dolorum, officiis quae vel autem molestias, possimus sint vero molestiae praesentium
                      optio asperiores? Eum, atque tempore tenetur unde veritatis nobis iure rerum commodi voluptatibus consequatur praesentium!
                    </p>
                    <p className={styles['describe_interior']}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                      totam accusantium numquam maxime quibusdam fugiat autem aliquid natus rerum nam architecto tenetur repudiandae exercitationem doloremque inventore cumque? Vero facilis voluptatum{' '}
                    </p>
                    <div className={styles['content_scandinavian']}>
                      <img className={styles['img_kitchen']} src={img_kitchen} alt="img_kitchen" />
                      <div className={styles['content_scandi']}>
                        <p className={styles['text_Scandinavian']}> Scandinavian Design</p>
                        <span className={styles['text_scan']}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                          totam accusantium numquam maxime quibusdam fugiat autem aliquid natus rerum nam architecto tenetur repudiandae exercitationem doloremque inventore cumque? Vero facilis voluptatum obcaecati, ex id nobis placeat
                          explicabo dolore, quisquam a harum,
                        </span>
                        <br />
                        <span className={styles['text_scan']}>
                          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                        </span>
                      </div>
                    </div>
                    <p className={styles['describe_interior']}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                      totam accusantium numquam maxime quibusdam fugiat autem aliquid natus rerum nam architecto tenetur repudiandae exercitationem doloremque inventore cumque? Vero facilis voluptatum obcaecati, ex id nobis placeat
                      explicabo dolore, quisquam a harum,
                    </p>
                    <p className={styles['describe_interior']}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                      totam accusantium numquam maxime quibusdam fugiat autem aliquid natus rerum nam architecto tenetur repudiandae exercitationem doloremque inventore cumque? Vero facilis voluptatum obcaecati, ex id nobis placeat
                      explicabo dolore, quisquam a harum,
                    </p>
                    <div className={styles['content_luxury']}>
                      <div className={styles['line_left']}></div>
                      <div className={styles['content_text_luxury']}>
                        <div className={styles['text_luxury']}> "Luxury Is In Each Detail" </div>
                        <div className={styles['text_hubert']}>Hubert de Givenchy - Scoutandnimble.com</div>
                      </div>
                    </div>
                    <p className={styles['describe_interior_text']}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                      totam accusantium numquam maxime quibusdam fugiat autem aliquid natus rerum nam architecto tenetur repudiandae exercitationem doloremque inventore cumque? Vero facilis voluptatum obcaecati, ex id nobis placeat
                      explicabo dolore, quisquam a harum,
                    </p>
                    <p className={styles['describe_interior']}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo
                      totam accusantium numquam maxime quibusdam fugiat autem aliquid natus rerum nam architecto tenetur repudiandae exercitationem doloremque inventore cumque? Vero facilis voluptatum obcaecati, ex id nobis placeat
                      explicabo dolore, quisquam a harum,
                    </p>
                    <div className={styles['content_sosmed']}>
                      <p className={styles['share_whith']}>Share Whith</p>
                      <div className={styles['icon_sosmed']}>
                        <img className={styles['img_sosmed']} src={icon_facebook} alt="icon_facebook" />
                        <img className={styles['img_sosmed']} src={icon_twitter} alt="icon_twitter" />
                        <img className={styles['img_sosmed']} src={icon_youtube} alt="icon_youtube" />
                        <img className={styles['img_sosmed']} src={icon_basket} alt="icon_basket" />
                      </div>
                    </div>
                    <div className={styles['border_line']}></div>
                    <div className={styles['content_post']}>
                      <div className={styles['content_img']}>
                        <div className={styles['img_recent']}>
                          <img src={icon_phone} alt="icon_phone" />
                        </div>
                        <div className={styles['text-recent']}>
                          How To Put Movies On <br /> Iphone
                          <p className={styles['text-time']}>24 april 2019 : 45 mins ago</p>
                        </div>
                      </div>
                      <div className={styles['content_post_right']}>
                        <div className={styles['content_img']}>
                          <div className={styles['img_recent']}>
                            <img src={icon_laptop} alt="icon_phone" />
                          </div>
                        </div>
                        <div className={styles['text-recent']}>
                          Windows Registry Cleaner <br /> <span className={styles['cheklist']}>Cheklist</span>
                          <p className={styles['text-time-right']}>24 april 2019 : 45 mins ago</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles['prev_post']}>
                      <p className={styles['paginasi']}>PREVIOUS POST</p>
                      <p className={styles['paginasi']}>NEXT POST</p>
                    </div>
                    <p className={styles['comment']}>4 Comment</p>
                    <div className={styles['border_comment']}>
                      <div className={styles['content_img_comment']}>
                        <img src={icon_hana} alt="icon_hana" />
                        <div className={styles['content_comment_right']}>
                          <p className={styles['text_comment']}>
                            "Theme is very flexibel easy to use. Perfect for us. Customer support <br /> has been excellent and andswered every question we've trown at them"
                          </p>
                          <p className={styles['text_time_comment']}>
                            35 mins ago, 15 November 2019 <span className={styles['text_reply']}>Reply</span>
                          </p>
                        </div>
                      </div>
                      <div className={styles['content_img_comment_right']}>
                        <span className={styles['line_bani']}></span>
                        <img src={icon_bani} alt="icon_bani" />
                        <div className={styles['content_comment_right']}>
                          <p className={styles['text_comment']}>
                            "This theme is indeed a great purchase. Support center is <br /> also helpful and quick to answer. No issues so far"
                          </p>
                          <p className={styles['text_time_comment']}>
                            35 mins ago, 15 November 2019 <span className={styles['text_reply']}>Reply</span>
                          </p>
                        </div>
                      </div>
                      <div className={styles['line_bottom']}></div>
                      <div className={styles['content_img_comment']}>
                        <img src={icon_hani} alt="icon_hani" />
                        <div className={styles['content_comment_right']}>
                          <p className={styles['text_comment']}>
                            "Exceptional service, beatiful and straightforward theme! Can't
                            <br />
                            recommend enough."
                          </p>
                          <p className={styles['text_time_comment']}>
                            35 mins ago, 15 November 2019 <span className={styles['text_reply']}>Reply</span>
                          </p>
                        </div>
                      </div>
                      <div className={styles['line_bottom']}></div>
                      <div className={styles['content_img_comment']}>
                        <img className={styles['icon_rachel']} src={icon_rachel} alt="icon_rachel" />
                        <div className={styles['content_comment_right']}>
                          <p className={styles['text_comment']}>
                            "Highly customizable. Excellent design. Customer services has exceeded <br /> my expectation. They are quick to answer and event when they don't know <br /> the answer right away. They'll work with you towards a
                            solution"
                          </p>
                          <p className={styles['text_time_comment']}>
                            35 mins ago, 15 November 2019 <span className={styles['text_reply']}>Reply</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className={styles['leave_comment']}>Leave A Comment</p>
                    <p className={styles['text_address']}>Your email address will not be published. Require fields are marked</p>
                    <form className={styles['content_comment']}>
                      <input className={styles['input_text']} type="text" placeholder="Name*" />
                      <input className={styles['input_text']} type="email" placeholder="Email*" />
                      <input className={styles['input_text']} type="text" placeholder="Website*" />
                    </form>
                    <div className={styles['input_comment']}>
                      <input className={styles['input_text_comment']} type="text" placeholder="Your Comment" />
                    </div>
                    <button className={styles['send']}>Send</button>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <p className={styles['relate_post']}>Related Post</p>
          <div className={styles['img_relate_post']}>
            <div className={styles['content_relate_img']}>
              <img className={styles['img_relate']} src={img_freshii} alt="img_freshii" />
              <p className={styles['text_interior']}>How to open interior shop?</p>
              <div className={styles['content_text_time']}>
                <span className={styles['text_relate']}>
                  <img className={styles['Icon_time']} src={Icon_time} alt="Icon_time" />
                  24 april 2019 : 45 mins ago, by Admin
                </span>
                <span className={styles['text_kids']}>
                  <img src={icon_tag} alt="icon_tag" />
                  Kids, Interior, Photos
                </span>
              </div>
            </div>
            <div className={styles['content_relate_img']}>
              <img className={styles['img_relate']} src={img_matress} alt="img_matress" />
              <p className={styles['text_interior']}>Beatiful Corner</p>
              <div className={styles['content_text_time']}>
                <span className={styles['text_relate']}>
                  <img className={styles['Icon_time']} src={Icon_time} alt="Icon_time" />
                  24 april 2019 : 45 mins ago, by Admin
                </span>
                <span className={styles['text_kids']}>
                  <img src={icon_tag} alt="icon_tag" />
                  Kids, Interior, Photos
                </span>
              </div>
            </div>
            <div className={styles['content_relate_img']}>
              <img className={styles['img_relate']} src={img_chair} alt="img_chair" />
              <p className={styles['text_interior']}>Furniture Vintage Style</p>
              <div className={styles['content_text_time']}>
                <span className={styles['text_relate']}>
                  <img className={styles['Icon_time']} src={Icon_time} alt="Icon_time" />
                  24 april 2019 : 45 mins ago, by Admin
                </span>
                <span className={styles['text_kids']}>
                  <img src={icon_tag} alt="icon_tag" />
                  Kids, Interior, Photos
                </span>
              </div>
            </div>
          </div>
          <div className={styles['content_point']}>
            <div className={styles['point']}></div>
            <div className={styles['point']}></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default BlogDetail;
