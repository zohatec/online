class NavContainer extends HTMLElement{
    connectedCallback (){
        this.innerHTML = `
        <section class="nav-container">
        <Nav class="navbar">
          <a href="#" class="logo"><img src="images/logo.png" alt="Our Company Logo"></a>
          <div class="menu-btn">
            <div class="menu-btn__lines"></div>
          </div>
          <ul class="menu-items">
            <li><a href="index.html" class="menu-item home-item ">Home</a></li>
            <li><a href="about.html" class="menu-item ">About</a></li>
            <!-- ---------------------- SERVICE ------------------------ -->
            <li>
              <a href="#" class="menu-item expand-btn">Services</a>
              <div class="mega-menu service expandable">
                <div class="content">
                  <div class="col">
                    <a href="#" class="img-wrapper">
                      <span class="img">
                        <img src="images/web.jpg" alt="Image About Web Development"/>
                      </span>
                    </a>
                      <h2>Web Development</h2>
                      <p>
                        Website is very crucial in the digital era. It enables businesses to showcase their products or services globally, reaching a vast audience. Build your Website with us.
                      </p>
                      <a href="#" class="read-more">Read More</a>
                  </div>
                  <div class="col">
                    <a href="#" class="img-wrapper">
                      <span class="img">
                        <img src="images/seo.jpg" alt="Image About SEO"/>
                      </span>
                    </a>
                      <h2>SEO</h2>
                      <p>
                        Search Engine Optimization is essential to rank a Website on Google. We need to build a Website following SEO rules. It helps to make huge traffic on a Website.
                      </p>
                    <a href="#" class="read-more">Read More</a>
                  </div>
                  <div class="col">
                    <a href="#" class="img-wrapper">
                      <span class="img">
                        <img src="images/dm.png" alt="Image About Digital Marketing"/>
                      </span>
                    </a>
                      <h2>Digital Marketing</h2>
                      <p>
                        It is crucial to make a cost-effective means for businesses to engage and build relationships with customers through various channels like social media, email, and search engines.
                      </p>
                    <a href="#" class="read-more">Read More</a>
                  </div>
                  <div class="col">
                    <a href="#" class="img-wrapper">
                      <span class="img">
                        <img src="images/ncon.jpg" alt="Image About Content Writing"/>
                      </span>
                    </a>
                      <h2>Content Writing</h2>
                      <p>
                        The power of good Content should never be underestimated. Content writing can make or break your Brand. That is why invest additional effort on it.
                      </p>
                    <a href="#" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </li>
              <!-- ---------------------------- PORTFOLIO ------------------------ -->
            <li>
              <a href="#" class="menu-item expand-btn">Portfolios</a>
              <div class="mega-menu expandable">
                <div class="content col-3">
                  <div class="col ex-col">
                    <section>
                      <h2>Demo Websites</h2>
                      <ul class="mega-links">
                        <li><a href="#">Demo - 01</a></li>
                        <li><a href="#">Demo - 02</a></li>
                        <li><a href="#">Demo - 03</a></li>
                        <li><a href="#">Demo - 04</a></li>
                        <li><a href="#">Demo - 05</a></li>
                      </ul>
                    </section>
                  </div>
                  <div class="col">
                    <section>
                      <h2>Success Stories</h2>
                      <ul class="mega-links">
                        <li><a href="#">Story - 01</a></li>
                        <li><a href="#">Story - 02</a></li>
                        <li><a href="#">Story - 03</a></li>
                        <li><a href="#">Story - 04</a></li>
                        <li><a href="#">Story - 05</a></li>
                      </ul>
                    </section>
                  </div>
                </div>
              </div>
            </li>
              <!----------------------- BLOG ------------------------>
            <li>
              <a href="#" class="menu-item expand-btn">Blogs</a>
              <div class="mega-menu blog expandable">
                <div class="content">
                  <div class="col">
                    <a href="#" class="img-wrapper">
                      <span class="img">
                        <img src="images/seo-imp.png" alt="Importance of SEO Friendly Website"/>
                      </span>
                    </a>
                      <h2>Website and SEO</h2>
                      <p>
                        "A website alone is not enough; having an SEO-friendly website is crucial for the online presence of a business. The website and SEO are closely connected, influencing each other, build your Website based on SEO rules"
                      </p>
                    <a href="article.html?type=mega-service&id=1" class="read-more">Read More</a>
                  </div>
                  <div class="col">
                    <a href="#" class="img-wrapper">
                      <span class="img">
                        <img src="images/m-dm1.jpg" alt="Digital Marketing vs Traditional Marketing"/>
                      </span>
                    </a>
                      <h2>Digital vs Traditional Marketing</h2>
                      <p>
                        "Traditional marketing methods can be very expensive. Adopting digital strategies not only helps to save money but also allow for better tracking of customer interactions. We can take future steps following this synergy."
                      </p>
                    <a href="#" class="read-more">Read More</a>
                  </div>
                  <div class="col">
                    <a href="#" class="img-wrapper">
                      <span class="img">
                        <img src="images/dm-method1.png" alt="Digital Marketing Process"/>
                      </span>
                    </a>
                      <h2>Digital Marketing Strategy</h2>
                      <p>
                        Digital marketing leverages online channels such as social media, email, online ad, content marketing and search engines to reach a targeted audience, offering real-time analytics and precise targeting. 
                      </p>
                    <a href="#" class="read-more">Read More</a>
                  </div>
                </div>
              </div>
            </li>
              <!-- ---------------------- OTHERS -------------------- -->
                  <li><a href="#" class="menu-item">Testimonials</a></li>
                  <li><a href="#" class="menu-item">FAQ</a></li>
                  <li><a href="#" class="menu-item">Contact</a></li>
            </ul>
          </Nav>
        </section>
        `
    }
}
customElements.define('nav-container', NavContainer)