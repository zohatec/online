class NavContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="nav-container">
            <nav class="navbar">
                <a href="index.html" class="logo"><img src="images/logo.png" alt="Our Company Logo"></a>
                
                <!-- Language Toggle (always visible, between logo and menu button) -->
                <div class="lang-toggle-wrapper">
                    <a href="#" id="lang-toggle" class="lang-toggle">EN</a>
                </div>

                <div class="menu-btn">
                    <div class="menu-btn__lines"></div>
                </div>

                <ul class="menu-items">
                    <li><a href="index.html" class="menu-item home-item" data-i18n="home">Home</a></li>
                    <li><a href="about.html" class="menu-item" data-i18n="about">About</a></li>
                    
                    <!-- ---------------------- SERVICES ------------------------ -->
                    <li class="has-mega">
                        <a href="services.html" class="menu-item" data-i18n="services">Services</a>
                        <span class="expand-icon"><i class='bx bx-chevron-down'></i></span>
                        <div class="mega-menu service expandable">
                            <div class="content">
                                <div class="col">
                                    <a href="article.html?type=service&id=1" class="img-wrapper">
                                        <span class="img"><img src="images/web.jpg" alt="Web Development"/></span>
                                    </a>
                                    <h2 data-i18n="service_1_title">Web Development</h2>
                                    <p data-i18n="service_1_desc">Website is very crucial in the digital era. It enables businesses to showcase their products or services globally, reaching a vast audience. Build your Website with us.</p>
                                    <a href="article.html?type=service&id=1" class="read-more" data-i18n="read_more">Read More</a>
                                </div>
                                <div class="col">
                                    <a href="article.html?type=service&id=2" class="img-wrapper">
                                        <span class="img"><img src="images/seo.jpg" alt="SEO"/></span>
                                    </a>
                                    <h2 data-i18n="service_2_title">SEO</h2>
                                    <p data-i18n="service_2_desc">Search Engine Optimization is essential to rank a Website on Google. We need to build a Website following SEO rules. It helps to make huge traffic on a Website.</p>
                                    <a href="article.html?type=service&id=2" class="read-more" data-i18n="read_more">Read More</a>
                                </div>
                                <div class="col">
                                    <a href="article.html?type=service&id=3" class="img-wrapper">
                                        <span class="img"><img src="images/dm.png" alt="Digital Marketing"/></span>
                                    </a>
                                    <h2 data-i18n="service_3_title">Digital Marketing</h2>
                                    <p data-i18n="service_3_desc">It is crucial to make a cost-effective means for businesses to engage and build relationships with customers through various channels like social media, email, and search engines.</p>
                                    <a href="article.html?type=service&id=3" class="read-more" data-i18n="read_more">Read More</a>
                                </div>
                                <div class="col">
                                    <a href="article.html?type=service&id=4" class="img-wrapper">
                                        <span class="img"><img src="images/ncon.jpg" alt="Content Writing"/></span>
                                    </a>
                                    <h2 data-i18n="service_4_title">Content Writing</h2>
                                    <p data-i18n="service_4_desc">The power of good Content should never be underestimated. Content writing can make or break your Brand. That is why invest additional effort on it.</p>
                                    <a href="article.html?type=service&id=4" class="read-more" data-i18n="read_more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <!-- ---------------------------- PORTFOLIO ------------------------ -->
                    <li class="has-mega">
                        <a href="portfolios.html" class="menu-item" data-i18n="portfolios">Portfolios</a>
                        <span class="expand-icon"><i class='bx bx-chevron-down'></i></span>
                        <div class="mega-menu expandable">
                            <div class="content col-3">
                                <div class="col ex-col">
                                    <section>
                                        <h2 data-i18n="demo1_title">Demo Websites</h2>
                                        <ul class="mega-links">
                                            <li><a href="portfolios.html#demo1" data-i18n="demo1_title">Demo - 01</a></li>
                                            <li><a href="portfolios.html#demo2" data-i18n="demo2_title">Demo - 02</a></li>
                                            <li><a href="portfolios.html#demo3" data-i18n="demo3_title">Demo - 03</a></li>
                                            <li><a href="portfolios.html#demo4" data-i18n="demo4_title">Demo - 04</a></li>
                                            <li><a href="portfolios.html#demo5" data-i18n="demo5_title">Demo - 05</a></li>
                                        </ul>
                                    </section>
                                </div>
                                <div class="col">
                                    <section>
                                        <h2 data-i18n="story1_title">Success Stories</h2>
                                        <ul class="mega-links">
                                            <li><a href="portfolios.html#story1" data-i18n="story1_title">Story - 01</a></li>
                                            <li><a href="portfolios.html#story2" data-i18n="story2_title">Story - 02</a></li>
                                            <li><a href="portfolios.html#story3" data-i18n="story3_title">Story - 03</a></li>
                                            <li><a href="portfolios.html#story4" data-i18n="story4_title">Story - 04</a></li>
                                            <li><a href="portfolios.html#story5" data-i18n="story5_title">Story - 05</a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <!----------------------- BLOG ------------------------>
                    <li class="has-mega">
                        <a href="blogs.html" class="menu-item" data-i18n="blogs">Blogs</a>
                        <span class="expand-icon"><i class='bx bx-chevron-down'></i></span>
                        <div class="mega-menu blog expandable">
                            <div class="content">
                                <div class="col">
                                    <a href="article.html?type=blog&id=1" class="img-wrapper">
                                        <span class="img"><img src="images/seo-imp.png" alt="Website vs SEO"/></span>
                                    </a>
                                    <h2 data-i18n="blog_1_title">Website and SEO</h2>
                                    <p data-i18n="blog_1_desc">"A website alone is not enough; having an SEO-friendly website is crucial for the online presence of a business. The website and SEO are closely connected, influencing each other, build your Website based on SEO rules"</p>
                                    <a href="article.html?type=blog&id=1" class="read-more" data-i18n="read_more">Read More</a>
                                </div>
                                <div class="col">
                                    <a href="article.html?type=blog&id=2" class="img-wrapper">
                                        <span class="img"><img src="images/m-dm1.jpg" alt="Digital vs Traditional Marketing"/></span>
                                    </a>
                                    <h2 data-i18n="blog_2_title">Digital vs Traditional Marketing</h2>
                                    <p data-i18n="blog_2_desc">"Traditional marketing methods can be very expensive. Adopting digital strategies not only helps to save money but also allow for better tracking of customer interactions. We can take future steps following this synergy."</p>
                                    <a href="article.html?type=blog&id=2" class="read-more" data-i18n="read_more">Read More</a>
                                </div>
                                <div class="col">
                                    <a href="article.html?type=blog&id=3" class="img-wrapper">
                                        <span class="img"><img src="images/dm-method1.png" alt="Digital Marketing Strategy"/></span>
                                    </a>
                                    <h2 data-i18n="blog_3_title">Digital Marketing Strategy</h2>
                                    <p data-i18n="blog_3_desc">Digital marketing leverages online channels such as social media, email, online ad, content marketing and search engines to reach a targeted audience, offering real-time analytics and precise targeting.</p>
                                    <a href="article.html?type=blog&id=3" class="read-more" data-i18n="read_more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <!-- ---------------------- OTHERS -------------------- -->
                    <!-- Now point to home page sections -->
                    <li><a href="index.html#testimonials" class="menu-item" data-i18n="testimonials">Testimonials</a></li>
                    <li><a href="index.html#faq" class="menu-item" data-i18n="faq">FAQ</a></li>
                    <li><a href="contact.html" class="menu-item" data-i18n="contact">Contact</a></li>
                    
                    <!-- Language toggle removed from here – now placed outside -->
                </ul>
            </nav>
        </section>
        `;
    }
}
customElements.define('nav-container', NavContainer);

// ========== SCROLL TO TOP CUSTOM ELEMENT ==========
class ScrollToTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <button id="scrollToTopBtn" title="Go to top">
            <i class="fas fa-arrow-up"></i>
        </button>
        `;
        
        const btn = this.querySelector('#scrollToTopBtn');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                btn.classList.add('show');
            } else {
                btn.classList.remove('show');
            }
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
customElements.define('scroll-to-top', ScrollToTop);
