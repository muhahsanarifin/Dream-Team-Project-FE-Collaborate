import React from 'react';

//import css
import styles from '../styles/Blog.module.css';

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
import img_matress from '../assets/img_matress.png';

const Blog = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <div className={`${styles['content']}`}>
              <p className={styles['text_blog']}>
                Blog <span className={styles['text_blog_row']}>{'>'}</span>
              </p>
              <div className={styles['blog']}>Our Blog</div>
              <p className={styles['text']}>Read and enjoy content from us</p>
            </div>
            <div className="container">
              <div className={styles['content_all']}>
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
                  <p className={styles['content_describe']}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo totam
                    accusantium
                  </p>
                  <div className={styles['read_more']}>
                    <p className={styles['text_more']}>
                      Read More<span className={styles['line']}></span>
                    </p>
                  </div>
                  <div className={styles['play']}>
                    <span className={styles['icon_play']}>▶</span>
                  </div>
                  <p className={styles['text_shop']}>Scandinavian Style 2019</p>
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
                  <p className={styles['content_describe']}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo totam
                    accusantium
                  </p>
                  <div className={styles['read_more']}>
                    <p className={styles['text_more']}>
                      Read More<span className={styles['line']}></span>
                    </p>
                  </div>
                  <div className={styles['content_pc']}>
                    <span className={styles['icon_pc']}>
                      <span className={styles['border_left_row']}>◁</span> <span className={styles['border_right_row']}>▷</span>
                    </span>
                  </div>
                  <p className={styles['text_shop']}>Beatiful Workspace for Designer</p>
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
                  <p className={styles['content_describe']}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo totam
                    accusantium
                  </p>
                  <div className={styles['read_more']}>
                    <p className={styles['text_more']}>
                      Read More<span className={styles['line']}></span>
                    </p>
                  </div>
                  <div className={styles['content_design']}>
                    <p className={styles['text_design']}>
                      Design is the Silent
                      <span>
                        <br />
                      </span>
                      ambassador of your brand.
                    </p>
                    <div className={styles['conten_line_joshua']}>
                      <span className={styles['line_joshua']}>
                        <p className={styles['text_joshua']}>Joshua Freeman</p>
                      </span>
                    </div>
                  </div>
                  <p className={styles['photo']}>26 Photos of Conner Kid</p>
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
                  <p className={styles['content_describe']}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo totam
                    accusantium
                  </p>
                  <div className={styles['read_more']}>
                    <p className={styles['text_more']}>
                      Read More<span className={styles['line']}></span>
                    </p>
                  </div>
                  <img className={styles['img_matress']} src={img_matress} alt="img_matress" />
                  <p className={styles['photo']}>26 Photos of Conner Kid</p>
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
                  <p className={styles['content_describe']}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate explicabo quae vel nihil veniam laboriosam quod, labore reprehenderit enim corrupti! Quae quasi ab, tempore quos eveniet harum ex soluta explicabo totam
                    accusantium
                  </p>
                  <div className={styles['read_more']}>
                    <p className={styles['text_more']}>
                      Read More<span className={styles['line']}></span>
                    </p>
                  </div>
                  <div className={styles['scroll']}>
                    <div className={styles['border_scroll']}>01</div>
                    <div className={styles['border_scroll']}>02</div>
                    <div className={styles['border_scroll']}>03</div>
                    <div className={styles['border_scroll']}>04</div>
                    <div className={styles['border_scroll']}>05</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
