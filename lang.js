// Language translations – full English & Bengali support
const translations = {
    en: {
        // ---------- Navbar ----------
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'portfolios': 'Portfolios',
        'blogs': 'Blogs',
        'testimonials': 'Testimonials',
        'faq': 'FAQ',
        'contact': 'Contact',

        // ---------- Hero Typing ----------
        'I\'m a': 'I\'m a',
        'typing_1': 'UI/UX/Web Designer',
        'typing_2': 'WordPress Developer',
        'typing_3': 'Video Editor',
        'typing_4': 'Social Media Manager',

        // ---------- Banner ----------
        'banner_title': 'Build your Online Presence with sSBC...',
        'banner_text': 'Unlock the full potential of your business with our comprehensive Online Presence Solutions. We specialize in shaping compelling Websites, driving organic traffic through SEO, executing targeted Digital Marketing campaigns, and delivering engaging Content that vibrates with your audience.',
        'get_started': 'Get Started',

        // ---------- Services Section ----------
        'services_title': '--: Services we Offer :--',
        'service_1_title': 'Web Development',
        'service_1_desc': 'We are the leading Web Development service provider in Bangladesh. Website is very crucial in the digital era. It enables businesses to showcase their products or services globally, reaching a vast audience. Build your Website with us. Join with us for any kind of Website of your Business or Brand . . .',
        'service_2_title': 'SEO',
        'service_2_desc': 'Our SEO service will lead your Business on Top of others. Search Engine Optimization is essential to rank a Website on Google. We need to build a Website following SEO rules. It helps to make huge traffic on a Website. If you want rank your Website on first page of Google contact with us . . .',
        'service_3_title': 'Digital Marketing',
        'service_3_desc': 'Today is the decade of being present online every moment. Without having online presence, your Business might fall down. It is crucial to make a cost-effective means for businesses to engage and build relationships with customers through various channels like social media, email, and search engines . . .',
        'service_4_title': 'Content Writing',
        'service_4_desc': 'Content writing involves the creation of written material for various platforms like websites, blogs, and social media about the product for the audience. The power of good Content should never be underestimated. Content writing can make or break your Brand. That is why invest additional effort on it . . .',

        // ---------- CTA Section ----------
        'cta_title': 'Ready to Transform Your Online Presence?',
        'cta_text': 'Get a <span class="highlight">FREE</span> Digital Marketing Audit & Consultation worth $9',
        'cta_phone': 'Call Now: +880 1719 550 700',
        'cta_whatsapp': 'Chat on WhatsApp',
        'cta_email': 'Book Free Consultation',
        'cta_note': 'Limited Time Offer - First 20 Clients Get 30% Off on All Services!',

        // ---------- Portfolio Intro ----------
        'portfolio_title': '--: Portfolios to check out our Proofs :--',
        'portfolio_subtitle': '" We are here not only to serve, but to serve wholeheartedly "',
        'portfolio_desc': '"Welcome to our Website Templates Showcase! Here, you can check out our collection of special website designs. We made these templates with care, thinking about all kinds of different needs and jobs. Whether you want a professional business site, a creative portfolio, or a strong online store, our templates are made to make your online space look great.<br><br>Each template shows how much we care about making things look good, work well, and be easy for you to use. Take a look at the small pictures below, find out what makes each template special, and click on the link for details. We think a fantastic website starts with a fantastic template, and we’re here to help you leave a good impression on the internet."',
        'portfolio_ending': 'Let’s take a look at our website samples below . . .',

        // ---------- Demo Items ----------
        'demo1_title': 'Demo Website - 01',
        'demo1_desc': 'Suitable for portfolio or personal Brand',
        'demo2_title': 'Demo Website - 02',
        'demo2_desc': 'Suitable for portfolio or personal Brand',
        'demo3_title': 'Demo Website - 03',
        'demo3_desc': 'Suitable for portfolio or personal Brand',
        'demo4_title': 'Demo Website - 04',
        'demo4_desc': 'Suitable for e-commerce or small business',
        'demo5_title': 'Demo Website - 05',
        'demo5_desc': 'Suitable for e-commerce or small business',
        'made_by': 'Made by: HTML, CSS and Javascript',
        'view_demo': 'View Demo',

        // ---------- Success Stories ----------
        'story1_title': 'E-Commerce Boost',
        'story1_client': 'Online Retailer " DPEX "',
        'story1_challenge': 'Low conversion rates and high cart abandonment.',
        'story1_strategy': 'Implemented targeted email campaigns, personalized product recommendations, and optimized checkout process.',
        'story1_results': 'Increased conversion rates by 30%, reduced cart abandonment by 20%.',
        'story2_title': 'B2B Lead Generation',
        'story2_client': 'Tech Solutions Provider " ARTISAN "',
        'story2_challenge': 'Low lead generation from the website.',
        'story2_strategy': 'Implemented content marketing, targeted LinkedIn advertising, and a downloadable whitepaper.',
        'story2_results': 'Tripled monthly lead generation within three months.',
        'story3_title': 'Local Business Visibility',
        'story3_client': 'Local Restaurant " Food Club "',
        'story3_challenge': 'Limited online visibility and foot traffic.',
        'story3_strategy': 'Leveraged local SEO, Google My Business optimization, and social media marketing.',
        'story3_results': 'Achieved a 50% increase in online reservations and a 25% rise in walk-in customers.',
        'story4_title': 'Brand Revitalization',
        'story4_client': 'Fashion Retailer " Hamim Fashion "',
        'story4_challenge': 'Outdated brand image and declining sales.',
        'story4_strategy': 'Launched a rebranding campaign, revamped website design, and engaged influencers for social media promotion.',
        'story4_results': 'Increased brand awareness by 40% and sales by 25%.',
        'story5_title': 'Nonprofit Fundraising',
        'story5_client': 'Nonprofit Organization " Walk for Life "',
        'story5_challenge': 'Limited online donations and engagement.',
        'story5_strategy': 'Created a targeted email fundraising campaign, optimized donation landing pages, and implemented a social media awareness drive.',
        'story5_results': 'Doubled online donations and increased social media engagement by 60%.',
        'activities': '-: Activities :-',

        // ---------- Blog Section (index & blogs page) ----------
        'blog_heading': 'B L O G S',
        'blog_1_title': 'Website vs SEO',
        'blog_1_desc': '"A website alone is not enough; having an SEO-friendly website is crucial for the online presence of a business. The website and SEO are closely connected, influencing each other, build your Website based on SEO rules"',
        'blog_2_title': 'Digital vs Traditional Marketing',
        'blog_2_desc': '"Traditional marketing methods can be very expensive. Adopting digital strategies not only helps to save money but also allow for better tracking of customer interactions. We can take future steps following this synergy."',
        'blog_3_title': 'Digital Marketing Strategy',
        'blog_3_desc': '"Digital marketing leverages online channels such as social media, email, online ad, content marketing and search engines to reach a targeted audience, offering real-time analytics and precise targeting."',

        // ---------- Testimonials ----------
        'testimonial_heading': '" Testimonials from our valued customers "',
        'testimonial_1_text': '" I was amazed by the outstanding service provided by sSBC. The commitment to customer satisfaction truly set them apart. I highly recommend their services to anyone who are looking for excellence."',
        'testimonial_1_name': 'Rehana Rakhi',
        'testimonial_1_job': 'Graphic Designer',
        'testimonial_2_text': '" Working with this team has been a game-changer for my business. Their expertise and dedication have significantly boosted our online presence. We are proud of their services, best of luck."',
        'testimonial_2_name': 'AK Bashir Azad',
        'testimonial_2_job': 'Entrepreneur',
        'testimonial_3_text': '" They not only delivered on their promises but also went above and beyond to ensure our project’s success. I’m a satisfied customer and will definitely return for future services."',
        'testimonial_3_name': 'Hanif Mahmud',
        'testimonial_3_job': 'CEO',

        // ---------- FAQ ----------
        'faq_title': 'FAQ',
        'faq_1_q': '1. Why is establishing a strong online identity essential for businesses in today’s landscape?',
        'faq_1_a': 'Online presence makes wider audience, build credibility and meaningful customer relationships. Establishing a strong online presence is essential for businesses in today’s landscape due to changing consumer behavior, cost-effective marketing opportunities, data-driven insights, gaining a competitive advantage, meeting evolving customer expectations, unlocking growth opportunities, and fostering continuous engagement and brand building. Embracing digital channels allows businesses to adapt to the digital age and unlock the vast potential of the online marketplace.',
        'faq_2_q': '2. What are the top platforms for creating an online identity?',
        'faq_2_a': 'Creating a strong online identity requires leveraging key platforms such as a well-designed website, social media platforms like Facebook, Instagram, Twitter, LinkedIn, and YouTube, and optimizing Google My Business listings. Online review platforms like Yelp and TripAdvisor also play a role in shaping a business’s identity, while blogging platforms such as WordPress and Medium enable businesses to share valuable content and establish thought leadership.',
        'faq_3_q': '3. Is it necessary to be present on all platforms to establish an online identity?',
        'faq_3_a': 'No, it is not necessary for businesses to be present on all platforms to establish an online identity. The choice of platforms should be based on the target audience, industry, and marketing goals of the business. Consistency and active engagement on a few key platforms can go a long way in establishing a compelling and recognizable online identity.',
        'faq_4_q': '4. What services does your marketing agency offer?',
        'faq_4_a': 'We specialize in a comprehensive range of services to elevate your online presence. Our main offerings include Web Development, SEO (Search Engine Optimization), Digital Marketing and Content writing. Whether you need a stunning website, improved search rankings, targeted digital campaigns, or engaging content, we have the expertise to meet all your requirements.',
        'faq_5_q': '5. What is web development and why is it important for my business?',
        'faq_5_a': 'Web development refers to the process of creating and maintaining websites. It involves various tasks such as web site design, coding, programming, website maintenance, etc. Website is crucial for establishing a strong online presence. A well-designed website not only enhances your brand image but also provides a user-friendly experience. It serves as a 24/7 digital storefront, attracting potential customers and boosting your credibility. Our expert web development team ensures your site is not just visually appealing but also optimized for performance and functionality.',
        'faq_6_q': '6. How does SEO (Search Engine Optimization) benefit my business?',
        'faq_6_a': 'SEO is a set of strategies and techniques aimed at improving a website’s visibility and ranking on search engine results pages. By optimizing your website for search engines, you can attract more organic traffic, increase your chances of appearing in relevant search queries, and ultimately drive more qualified leads to your website. SEO helps boost your online visibility, credibility, and long-term growth by making your website more accessible and user-friendly.',
        'faq_7_q': '7. How long does it typically take to see results from SEO efforts?',
        'faq_7_a': 'The timeline for SEO results varies based on several factors, including the competitiveness of your industry and the current state of your website. While some improvements may be noticeable within a few weeks, significant results often take a few months. Our team employs proven strategies to ensure sustainable and long-term success in improving your search engine rankings.',
        'faq_8_q': '8. How does digital marketing contribute to business growth?',
        'faq_8_a': 'Digital marketing encompasses various online marketing strategies such as social media marketing, email marketing, pay-per-click advertising, and more. It leverages digital channels to reach and engage with your target audience, driving brand awareness, generating leads, and increasing conversions. Digital marketing offers precise targeting, measurable results, and the ability to adapt campaigns in real-time, making it a cost-effective and efficient way to grow your business in the digital era.',
        'faq_9_q': '9. Why is quality content crucial for my online identity?',
        'faq_9_a': 'Content writing plays a crucial role in attracting and engaging your website visitors. High-quality and relevant content helps convey your brand message, educate your audience, and establish your expertise in your industry. Well-crafted content also improves your website’s search engine visibility, as search engines value informative and valuable content. Whether it’s blog posts, articles, product descriptions, or website copy, investing in professional content writing can significantly enhance your online presence and help drive organic traffic and conversions.',
        'faq_10_q': '10. What sets your content writing services apart from others?',
        'faq_10_a': 'Our content writing services stand out for their quality, relevance, and strategic approach. We don’t just create content for the sake of it; we tailor each piece to align with your brand voice, target audience, and SEO goals. Our team of skilled writers focuses on delivering content that not only engages your audience but also drives meaningful results for your business, be it increased website traffic or higher conversion rates.',
        'faq_11_q': '11. Can you redesign an existing website, or do you only create new ones?',
        'faq_11_a': 'Absolutely ! Whether you have an existing website that needs a fresh look or you’re starting from scratch, we offer both website redesign and new website development services. Our team works closely with you to understand your goals and preferences, ensuring the end result aligns perfectly with your brand identity and business objectives. Our expert web development team ensures your site is not just visually appealing but also optimized for performance and functionality.',

        // ---------- Footer ----------
        'footer_about_title': 'About sSBC',
        'footer_about_text': 'We are a premier digital marketing agency specializing in creating impactful online presence for businesses. Our team of experts delivers results-driven solutions.',
        'footer_quick_links': 'Quick Links',
        'footer_our_services': 'Our Services',
        'footer_newsletter_title': 'Newsletter',
        'footer_newsletter_text': 'Get latest updates & offers',
        'footer_subscribe': 'Subscribe',
        'footer_contact_title': 'Contact Us',
        'footer_address': 'sSBC Point, Samsadipur, Katakhali, Rajshahi, Bangladesh.',
        'footer_phone': '+880 1719 550 700',
        'footer_email': 'info@ssbc.com',
        'footer_hours': 'Sun-Thu: 9:00 AM - 6:00 PM',
        'footer_follow': 'Follow Us',
        'footer_copyright': '© 2026 sSBC Marketing Agency. All Rights Reserved.',
        'footer_privacy': 'Privacy Policy',
        'footer_terms': 'Terms & Conditions',
        'footer_cookie': 'Cookie Policy',

        // ---------- Buttons & Common ----------
        'read_more': 'Read More',
        'learn_more': 'Learn More',
        'send_message': 'Send Message',
        'your_name': 'Full Name',
        'your_email': 'Email Address',
        'your_message': 'Message',
        'contact_success': 'Thank you! Your message has been sent.',
        'newsletter_success': 'Thank you for subscribing!',
        'newsletter_invalid': 'Please enter a valid email.',
        'article_not_found': 'Article Not Found',
        'article_not_found_msg': 'The article you’re looking for doesn’t exist or has been moved.',
        'back_to_home': 'Back to Home',
        'share_this': 'Share this article:',
        'find_us': 'Find Us',   // <--- add this line (don't forget the comma before it)
    },

    bn: {
        // ---------- Navbar ----------
        'home': 'হোম',
        'about': 'আমাদের সম্পর্কে',
        'services': 'সেবাসমূহ',
        'portfolios': 'পোর্টফোলিও',
        'blogs': 'ব্লগ',
        'testimonials': 'সন্তুষ্ট গ্রাহক',
        'faq': 'জিজ্ঞাসা',
        'contact': 'যোগাযোগ',

        // ---------- Hero Typing ----------
        'I\'m a': 'আমি',
        'typing_1': 'UI/UX/ওয়েব ডিজাইনার',
        'typing_2': 'ওয়ার্ডপ্রেস ডেভেলপার',
        'typing_3': 'ভিডিও এডিটর',
        'typing_4': 'সোশ্যাল মিডিয়া ম্যানেজার',

        // ---------- Banner ----------
        'banner_title': 'sSBC-এর সাথে তৈরি করুন আপনার অনলাইন উপস্থিতি...',
        'banner_text': 'আমাদের ব্যাপক অনলাইন উপস্থিতি সমাধানের মাধ্যমে আপনার ব্যবসার পূর্ণ সম্ভাবনা উন্মোচন করুন। আমরা আকর্ষণীয় ওয়েবসাইট তৈরি, এসইও-এর মাধ্যমে জৈব ট্রাফিক বৃদ্ধি, টার্গেটেড ডিজিটাল মার্কেটিং ক্যাম্পেইন এবং আপনার দর্শকদের সাথে সংযোগ স্থাপনকারী কন্টেন্ট সরবরাহে বিশেষজ্ঞ।',
        'get_started': 'শুরু করুন',

        // ---------- Services Section ----------
        'services_title': '--: আমাদের সেবাসমূহ :--',
        'service_1_title': 'ওয়েব ডেভেলপমেন্ট',
        'service_1_desc': 'আমরা বাংলাদেশের শীর্ষস্থানীয় ওয়েব ডেভেলপমেন্ট সার্ভিস প্রোভাইডার। ডিজিটাল যুগে ওয়েবসাইট খুবই গুরুত্বপূর্ণ। এটি ব্যবসাগুলোকে তাদের পণ্য বা সেবা বিশ্বব্যাপী প্রদর্শন করতে সক্ষম করে। আপনার ওয়েবসাইটটি আমাদের সাথে তৈরি করুন। আপনার ব্যবসা বা ব্র্যান্ডের যেকোনো ধরনের ওয়েবসাইটের জন্য আমাদের সাথে যোগ দিন . . .',
        'service_2_title': 'এসইও',
        'service_2_desc': 'আমাদের এসইও সার্ভিস আপনার ব্যবসাকে অন্যদের থেকে এগিয়ে রাখবে। গুগলে ওয়েবসাইট র্যাঙ্ক করানোর জন্য সার্চ ইঞ্জিন অপটিমাইজেশন অপরিহার্য। এসইও নিয়ম মেনে ওয়েবসাইট তৈরি করতে হবে। এটি ওয়েবসাইটে বিশাল ট্রাফিক তৈরি করতে সহায়তা করে। আপনি যদি আপনার ওয়েবসাইট গুগলের প্রথম পৃষ্ঠায় র্যাঙ্ক করাতে চান তবে আমাদের সাথে যোগাযোগ করুন . . .',
        'service_3_title': 'ডিজিটাল মার্কেটিং',
        'service_3_desc': 'বর্তমান দশক প্রতিটি মুহূর্তে অনলাইনে উপস্থিত থাকার। অনলাইন উপস্থিতি ছাড়া আপনার ব্যবসা পিছিয়ে পড়তে পারে। ব্যবসার জন্য সাশ্রয়ী উপায়ে সোশ্যাল মিডিয়া, ইমেইল এবং সার্চ ইঞ্জিনের মতো বিভিন্ন চ্যানেলের মাধ্যমে গ্রাহকদের সাথে সম্পৃক্ত হওয়া এবং সম্পর্ক তৈরি করা অত্যন্ত গুরুত্বপূর্ণ . . .',
        'service_4_title': 'কন্টেন্ট রাইটিং',
        'service_4_desc': 'কন্টেন্ট রাইটিং হলো ওয়েবসাইট, ব্লগ এবং সোশ্যাল মিডিয়ার মতো বিভিন্ন প্ল্যাটফর্মের জন্য দর্শকদের লক্ষ্য করে পণ্য সম্পর্কে লিখিত উপাদান তৈরি করা। ভালো কন্টেন্টের শক্তি কখনই অবমূল্যায়ন করা উচিত নয়। কন্টেন্ট রাইটিং আপনার ব্র্যান্ড তৈরি বা ভেঙে দিতে পারে। তাই এতে অতিরিক্ত প্রচেষ্টা বিনিয়োগ করুন . . .',

        // ---------- CTA Section ----------
        'cta_title': 'আপনার অনলাইন উপস্থিতি রূপান্তর করতে প্রস্তুত?',
        'cta_text': 'মূল্য $৯ এর একটি <span class="highlight">ফ্রি</span> ডিজিটাল মার্কেটিং অডিট ও কনসাল্টেশন পান',
        'cta_phone': 'এখনই কল করুন: +৮৮০ ১৭১৯ ৫৫০ ৭০০',
        'cta_whatsapp': 'হোয়াটসঅ্যাপে চ্যাট করুন',
        'cta_email': 'ফ্রি কনসাল্টেশন বুক করুন',
        'cta_note': 'সীমিত সময়ের অফার - প্রথম ২০ ক্লায়েন্ট সকল সেবায় ৩০% ছাড় পান!',

        // ---------- Portfolio Intro ----------
        'portfolio_title': '--: আমাদের প্রমাণ দেখতে পোর্টফোলিও :--',
        'portfolio_subtitle': '" আমরা শুধু সেবা দিতে নই, বরং আন্তরিকভাবে সেবা দিতে এখানে "',
        'portfolio_desc': '"আমাদের ওয়েবসাইট টেমপ্লেট শোকেসে স্বাগতম! এখানে আপনি আমাদের বিশেষ ওয়েবসাইট ডিজাইনের সংগ্রহ দেখতে পারেন। আমরা এই টেমপ্লেটগুলো যত্ন সহকারে তৈরি করেছি, বিবেচনা করে বিভিন্ন ধরনের চাহিদা ও কাজ। আপনি একটি পেশাদার ব্যবসায়িক সাইট, একটি সৃজনশীল পোর্টফোলিও বা একটি শক্তিশালী অনলাইন স্টোর চান না কেন, আমাদের টেমপ্লেটগুলো আপনার অনলাইন স্পেসকে দুর্দান্ত দেখাতে তৈরি করা হয়েছে।<br><br>প্রতিটি টেমপ্লেট দেখায় যে আমরা জিনিসগুলিকে সুন্দর, কার্যকর এবং ব্যবহারে সহজ করতে কতটা যত্নশীল। নীচের ছোট ছবিগুলো দেখুন, প্রতিটি টেমপ্লেটের বিশেষত্ব খুঁজে বের করুন এবং বিস্তারিত জানতে লিঙ্কে ক্লিক করুন। আমরা বিশ্বাস করি একটি চমৎকার ওয়েবসাইট শুরু হয় একটি চমৎকার টেমপ্লেট দিয়ে, এবং আমরা ইন্টারনেটে আপনাকে একটি ভাল ছাপ রাখতে সাহায্য করতে এখানে আছি।"',
        'portfolio_ending': 'আসুন নীচে আমাদের ওয়েবসাইটের নমুনাগুলি দেখি . . .',

        // ---------- Demo Items ----------
        'demo1_title': 'ডেমো ওয়েবসাইট - ০১',
        'demo1_desc': 'পোর্টফোলিও বা ব্যক্তিগত ব্র্যান্ডের জন্য উপযুক্ত',
        'demo2_title': 'ডেমো ওয়েবসাইট - ০২',
        'demo2_desc': 'পোর্টফোলিও বা ব্যক্তিগত ব্র্যান্ডের জন্য উপযুক্ত',
        'demo3_title': 'ডেমো ওয়েবসাইট - ০৩',
        'demo3_desc': 'পোর্টফোলিও বা ব্যক্তিগত ব্র্যান্ডের জন্য উপযুক্ত',
        'demo4_title': 'ডেমো ওয়েবসাইট - ০৪',
        'demo4_desc': 'ই-কমার্স বা ছোট ব্যবসার জন্য উপযুক্ত',
        'demo5_title': 'ডেমো ওয়েবসাইট - ০৫',
        'demo5_desc': 'ই-কমার্স বা ছোট ব্যবসার জন্য উপযুক্ত',
        'made_by': 'নির্মিত: HTML, CSS এবং Javascript',
        'view_demo': 'ডেমো দেখুন',

        // ---------- Success Stories ----------
        'story1_title': 'ই-কমার্স বুস্ট',
        'story1_client': 'অনলাইন খুচরা বিক্রেতা " DPEX "',
        'story1_challenge': 'কম রূপান্তর হার এবং উচ্চ কার্ট ত্যাগ।',
        'story1_strategy': 'লক্ষ্যভিত্তিক ইমেইল ক্যাম্পেইন, ব্যক্তিগতকৃত পণ্য সুপারিশ এবং অপটিমাইজড চেকআউট প্রক্রিয়া বাস্তবায়ন।',
        'story1_results': 'রূপান্তর হার ৩০% বৃদ্ধি, কার্ট ত্যাগ ২০% হ্রাস।',
        'story2_title': 'বিটুবি লিড জেনারেশন',
        'story2_client': 'টেক সলিউশন প্রদানকারী " ARTISAN "',
        'story2_challenge': 'ওয়েবসাইট থেকে কম লিড জেনারেশন।',
        'story2_strategy': 'কন্টেন্ট মার্কেটিং, লক্ষ্যভিত্তিক লিঙ্কডইন বিজ্ঞাপন এবং ডাউনলোডযোগ্য হোয়াইটপেপার বাস্তবায়ন।',
        'story2_results': 'তিন মাসের মধ্যে মাসিক লিড জেনারেশন তিনগুণ।',
        'story3_title': 'স্থানীয় ব্যবসার দৃশ্যমানতা',
        'story3_client': 'স্থানীয় রেস্তোরাঁ " Food Club "',
        'story3_challenge': 'সীমিত অনলাইন দৃশ্যমানতা এবং পদচারণা।',
        'story3_strategy': 'স্থানীয় এসইও, গুগল মাই বিজনেস অপটিমাইজেশন এবং সোশ্যাল মিডিয়া মার্কেটিং ব্যবহার।',
        'story3_results': 'অনলাইন রিজার্ভেশন ৫০% বৃদ্ধি এবং ওয়াক-ইন গ্রাহক ২৫% বৃদ্ধি।',
        'story4_title': 'ব্র্যান্ড পুনরুজ্জীবন',
        'story4_client': 'ফ্যাশন খুচরা বিক্রেতা " Hamim Fashion "',
        'story4_challenge': 'পুরোনো ব্র্যান্ড ইমেজ এবং ক্রমহ্রাসমান বিক্রয়।',
        'story4_strategy': 'রিব্র্যান্ডিং ক্যাম্পেইন চালু, ওয়েবসাইট ডিজাইন পুনর্নির্মাণ এবং সোশ্যাল মিডিয়া প্রচারে ইনফ্লুয়েন্সার নিযুক্ত।',
        'story4_results': 'ব্র্যান্ড সচেতনতা ৪০% এবং বিক্রয় ২৫% বৃদ্ধি।',
        'story5_title': 'অলাভজনক তহবিল সংগ্রহ',
        'story5_client': 'অলাভজনক সংস্থা " Walk for Life "',
        'story5_challenge': 'সীমিত অনলাইন দান এবং ব্যস্ততা।',
        'story5_strategy': 'লক্ষ্যভিত্তিক ইমেইল তহবিল সংগ্রহ ক্যাম্পেইন তৈরি, দান ল্যান্ডিং পেজ অপটিমাইজ এবং সোশ্যাল মিডিয়া সচেতনতা ড্রাইভ বাস্তবায়ন।',
        'story5_results': 'অনলাইন দান দ্বিগুণ এবং সোশ্যাল মিডিয়া ব্যস্ততা ৬০% বৃদ্ধি।',
        'activities': '-: কার্যক্রম :-',

        // ---------- Blog Section (index & blogs page) ----------
        'blog_heading': 'ব্লগ',
        'blog_1_title': 'ওয়েবসাইট বনাম এসইও',
        'blog_1_desc': '"শুধু ওয়েবসাইট তৈরি যথেষ্ট নয়; একটি এসইও-বান্ধব ওয়েবসাইট একটি ব্যবসার অনলাইন উপস্থিতির জন্য অত্যন্ত গুরুত্বপূর্ণ। ওয়েবসাইট এবং এসইও ঘনিষ্ঠভাবে সংযুক্ত, একে অপরকে প্রভাবিত করে, এসইও নিয়ম মেনে আপনার ওয়েবসাইট তৈরি করুন"',
        'blog_2_title': 'ডিজিটাল বনাম ঐতিহ্যবাহী মার্কেটিং',
        'blog_2_desc': '"ঐতিহ্যবাহী মার্কেটিং পদ্ধতি খুব ব্যয়বহুল হতে পারে। ডিজিটাল কৌশল গ্রহণ শুধু অর্থ সাশ্রয়ই করে না বরং গ্রাহকের মিথস্ক্রিয়ার আরও ভালো ট্র্যাকিংয়ের অনুমতি দেয়। আমরা এই সমন্বয় অনুসরণ করে ভবিষ্যতের পদক্ষেপ নিতে পারি।"',
        'blog_3_title': 'ডিজিটাল মার্কেটিং কৌশল',
        'blog_3_desc': '"ডিজিটাল মার্কেটিং সোশ্যাল মিডিয়া, ইমেইল, অনলাইন বিজ্ঞাপন, কন্টেন্ট মার্কেটিং এবং সার্চ ইঞ্জিনের মতো অনলাইন চ্যানেল ব্যবহার করে লক্ষ্যভিত্তিক দর্শকদের কাছে পৌঁছায়, যা রিয়েল-টাইম বিশ্লেষণ এবং নির্ভুল টার্গেটিং অফার করে।"',

        // ---------- Testimonials ----------
        'testimonial_heading': '" আমাদের মূল্যবান গ্রাহকদের প্রশংসাপত্র "',
        'testimonial_1_text': '" sSBC-এর অসাধারণ সেবা দেখে আমি বিস্মিত। গ্রাহক সন্তুষ্টির প্রতি তাদের প্রতিশ্রুতি সত্যিই তাদের আলাদা করেছে। আমি যারা শ্রেষ্ঠত্ব খুঁজছেন তাদের কাছে তাদের সেবা অত্যন্ত সুপারিশ করি।"',
        'testimonial_1_name': 'রেহানা রাখী',
        'testimonial_1_job': 'গ্রাফিক ডিজাইনার',
        'testimonial_2_text': '" এই দলের সাথে কাজ করা আমার ব্যবসার জন্য একটি গেম-চেঞ্জার হয়েছে। তাদের দক্ষতা এবং উৎসর্গ আমাদের অনলাইন উপস্থিতি উল্লেখযোগ্যভাবে বাড়িয়েছে। আমরা তাদের সেবায় গর্বিত, শুভকামনা।"',
        'testimonial_2_name': 'এ কে বশির আজাদ',
        'testimonial_2_job': 'উদ্যোক্তা',
        'testimonial_3_text': '" তারা তাদের প্রতিশ্রুতি পূরণই করেনি, বরং আমাদের প্রকল্পের সাফল্য নিশ্চিত করতে প্রত্যাশার চেয়েও বেশি কিছু করেছে। আমি একজন সন্তুষ্ট গ্রাহক এবং ভবিষ্যতের সেবার জন্য অবশ্যই ফিরে আসব।"',
        'testimonial_3_name': 'হানিফ মাহমুদ',
        'testimonial_3_job': 'সিইও',

        // ---------- FAQ ----------
        'faq_title': 'জিজ্ঞাসা',
        'faq_1_q': '১. আজকের প্রেক্ষাপটে ব্যবসার জন্য একটি শক্তিশালী অনলাইন পরিচয় স্থাপন করা কেন অপরিহার্য?',
        'faq_1_a': 'অনলাইন উপস্থিতি বৃহত্তর দর্শক তৈরি করে, বিশ্বাসযোগ্যতা এবং অর্থপূর্ণ গ্রাহক সম্পর্ক গড়ে তোলে। আজকের প্রেক্ষাপটে ব্যবসার জন্য একটি শক্তিশালী অনলাইন উপস্থিতি স্থাপন করা অপরিহার্য কারণ পরিবর্তনশীল ভোক্তা আচরণ, সাশ্রয়ী মার্কেটিং সুযোগ, ডেটা-চালিত অন্তর্দৃষ্টি, প্রতিযোগিতামূলক সুবিধা অর্জন, ক্রমবর্ধমান গ্রাহক প্রত্যাশা পূরণ, বৃদ্ধির সুযোগ উন্মোচন এবং ক্রমাগত ব্যস্ততা ও ব্র্যান্ড বিল্ডিং। ডিজিটাল চ্যানেল গ্রহণ ব্যবসাগুলোকে ডিজিটাল যুগের সাথে খাপ খাইয়ে নিতে এবং অনলাইন বাজারের বিশাল সম্ভাবনা উন্মোচন করতে দেয়।',
        'faq_2_q': '২. অনলাইন পরিচয় তৈরির শীর্ষ প্ল্যাটফর্মগুলি কী কী?',
        'faq_2_a': 'একটি শক্তিশালী অনলাইন পরিচয় তৈরি করতে মূল প্ল্যাটফর্মগুলির সুবিধা নেওয়া প্রয়োজন যেমন একটি সু-পরিকল্পিত ওয়েবসাইট, ফেসবুক, ইনস্টাগ্রাম, টুইটার, লিঙ্কডইন এবং ইউটিউবের মতো সোশ্যাল মিডিয়া প্ল্যাটফর্ম এবং গুগল মাই বিজনেস লিস্টিং অপটিমাইজ করা। ইয়েল্প এবং ট্রিপঅ্যাডভাইজারের মতো অনলাইন রিভিউ প্ল্যাটফর্মগুলি একটি ব্যবসার পরিচয় গঠনে ভূমিকা রাখে, যখন ওয়ার্ডপ্রেস এবং মিডিয়ামের মতো ব্লগিং প্ল্যাটফর্মগুলি ব্যবসাগুলিকে মূল্যবান কন্টেন্ট শেয়ার করতে এবং থট লিডারশিপ প্রতিষ্ঠা করতে সক্ষম করে।',
        'faq_3_q': '৩. অনলাইন পরিচয় প্রতিষ্ঠার জন্য কি সব প্ল্যাটফর্মে উপস্থিত থাকা প্রয়োজন?',
        'faq_3_a': 'না, অনলাইন পরিচয় প্রতিষ্ঠার জন্য ব্যবসার জন্য সব প্ল্যাটফর্মে উপস্থিত থাকা প্রয়োজন নয়। প্ল্যাটফর্মের পছন্দ ব্যবসার লক্ষ্য দর্শক, শিল্প এবং মার্কেটিং লক্ষ্যের উপর ভিত্তি করে হওয়া উচিত। কয়েকটি মূল প্ল্যাটফর্মে ধারাবাহিকতা এবং সক্রিয় ব্যস্ততা একটি আকর্ষণীয় এবং স্বীকৃত অনলাইন পরিচয় প্রতিষ্ঠায় অনেক দূর এগিয়ে যেতে পারে।',
        'faq_4_q': '৪. আপনার মার্কেটিং এজেন্সি কী কী সেবা প্রদান করে?',
        'faq_4_a': 'আমরা আপনার অনলাইন উপস্থিতি উন্নত করতে ব্যাপক পরিসরের সেবায় বিশেষজ্ঞ। আমাদের প্রধান অফারগুলির মধ্যে রয়েছে ওয়েব ডেভেলপমেন্ট, এসইও (সার্চ ইঞ্জিন অপটিমাইজেশন), ডিজিটাল মার্কেটিং এবং কন্টেন্ট রাইটিং। আপনার একটি চমৎকার ওয়েবসাইট, উন্নত সার্চ র্যাঙ্কিং, লক্ষ্যভিত্তিক ডিজিটাল ক্যাম্পেইন বা আকর্ষণীয় কন্টেন্ট যাই প্রয়োজন হোক না কেন, আপনার সকল প্রয়োজন মেটাতে আমাদের দক্ষতা রয়েছে।',
        'faq_5_q': '৫. ওয়েব ডেভেলপমেন্ট কী এবং এটি আমার ব্যবসার জন্য কেন গুরুত্বপূর্ণ?',
        'faq_5_a': 'ওয়েব ডেভেলপমেন্ট বলতে ওয়েবসাইট তৈরি এবং রক্ষণাবেক্ষণের প্রক্রিয়াকে বোঝায়। এতে ওয়েবসাইট ডিজাইন, কোডিং, প্রোগ্রামিং, ওয়েবসাইট মেইনটেন্যান্স ইত্যাদির মতো বিভিন্ন কাজ জড়িত। একটি শক্তিশালী অনলাইন উপস্থিতি প্রতিষ্ঠার জন্য ওয়েবসাইট অত্যন্ত গুরুত্বপূর্ণ। একটি সু-পরিকল্পিত ওয়েবসাইট শুধু আপনার ব্র্যান্ড ইমেজই বাড়ায় না বরং একটি ব্যবহারকারী-বান্ধব অভিজ্ঞতাও প্রদান করে। এটি ২৪/৭ ডিজিটাল শোরুম হিসেবে কাজ করে, সম্ভাব্য গ্রাহকদের আকর্ষণ করে এবং আপনার বিশ্বাসযোগ্যতা বাড়ায়। আমাদের বিশেষজ্ঞ ওয়েব ডেভেলপমেন্ট টিম নিশ্চিত করে যে আপনার সাইটটি দৃশ্যত আকর্ষণীয়ই নয় বরং কর্মক্ষমতা এবং কার্যকারিতার জন্যও অপটিমাইজড।',
        'faq_6_q': '৬. এসইও (সার্চ ইঞ্জিন অপটিমাইজেশন) কীভাবে আমার ব্যবসার উপকার করে?',
        'faq_6_a': 'এসইও হলো সার্চ ইঞ্জিন ফলাফল পৃষ্ঠাগুলিতে একটি ওয়েবসাইটের দৃশ্যমানতা এবং র্যাঙ্কিং উন্নত করার লক্ষ্যে কৌশল ও কৌশলের একটি সেট। সার্চ ইঞ্জিনের জন্য আপনার ওয়েবসাইট অপটিমাইজ করে, আপনি আরও জৈব ট্রাফিক আকর্ষণ করতে পারেন, প্রাসঙ্গিক সার্চ কোয়ারিতে উপস্থিত হওয়ার সম্ভাবনা বাড়াতে পারেন এবং শেষ পর্যন্ত আপনার ওয়েবসাইটে আরও যোগ্য লিড চালনা করতে পারেন। এসইও আপনার ওয়েবসাইটকে আরও অ্যাক্সেসযোগ্য এবং ব্যবহারকারী-বান্ধব করে আপনার অনলাইন দৃশ্যমানতা, বিশ্বাসযোগ্যতা এবং দীর্ঘমেয়াদী বৃদ্ধি বাড়াতে সহায়তা করে।',
        'faq_7_q': '৭. এসইও প্রচেষ্টা থেকে ফলাফল দেখতে সাধারণত কত সময় লাগে?',
        'faq_7_a': 'এসইও ফলাফলের সময়রেখা বিভিন্ন কারণের উপর ভিত্তি করে পরিবর্তিত হয়, যার মধ্যে আপনার শিল্পের প্রতিযোগিতামূলকতা এবং আপনার ওয়েবসাইটের বর্তমান অবস্থা অন্তর্ভুক্ত। কিছু উন্নতি কয়েক সপ্তাহের মধ্যে লক্ষণীয় হতে পারে, তবে উল্লেখযোগ্য ফলাফল প্রায়ই কয়েক মাস সময় নেয়। আমাদের দল আপনার সার্চ ইঞ্জিন র্যাঙ্কিং উন্নত করতে টেকসই এবং দীর্ঘমেয়াদী সাফল্য নিশ্চিত করতে প্রমাণিত কৌশল নিয়োগ করে।',
        'faq_8_q': '৮. ডিজিটাল মার্কেটিং কীভাবে ব্যবসায়িক বৃদ্ধিতে অবদান রাখে?',
        'faq_8_a': 'ডিজিটাল মার্কেটিং সোশ্যাল মিডিয়া মার্কেটিং, ইমেইল মার্কেটিং, পে-পার-ক্লিক বিজ্ঞাপন এবং আরও অনেক কিছুর মতো বিভিন্ন অনলাইন মার্কেটিং কৌশল অন্তর্ভুক্ত করে। এটি আপনার লক্ষ্য দর্শকদের কাছে পৌঁছাতে এবং তাদের সাথে সম্পৃক্ত হতে ডিজিটাল চ্যানেল ব্যবহার করে, ব্র্যান্ড সচেতনতা চালনা করে, লিড তৈরি করে এবং রূপান্তর বৃদ্ধি করে। ডিজিটাল মার্কেটিং নির্ভুল টার্গেটিং, পরিমাপযোগ্য ফলাফল এবং রিয়েল-টাইমে ক্যাম্পেইন মানিয়ে নেওয়ার ক্ষমতা প্রদান করে, যা ডিজিটাল যুগে আপনার ব্যবসা বাড়ানোর একটি সাশ্রয়ী এবং কার্যকর উপায় করে তোলে।',
        'faq_9_q': '৯. আমার অনলাইন পরিচয়ের জন্য মানসম্পন্ন কন্টেন্ট কেন গুরুত্বপূর্ণ?',
        'faq_9_a': 'কন্টেন্ট রাইটিং আপনার ওয়েবসাইট দর্শকদের আকর্ষণ এবং সম্পৃক্ত করতে গুরুত্বপূর্ণ ভূমিকা পালন করে। উচ্চ-মানের এবং প্রাসঙ্গিক কন্টেন্ট আপনার ব্র্যান্ড বার্তা পৌঁছে দিতে, আপনার দর্শকদের শিক্ষিত করতে এবং আপনার শিল্পে আপনার দক্ষতা প্রতিষ্ঠা করতে সহায়তা করে। সু-নির্মিত কন্টেন্ট আপনার ওয়েবসাইটের সার্চ ইঞ্জিন দৃশ্যমানতাও উন্নত করে, কারণ সার্চ ইঞ্জিন তথ্যপূর্ণ এবং মূল্যবান কন্টেন্টকে মূল্য দেয়। এটি ব্লগ পোস্ট, নিবন্ধ, পণ্যের বিবরণ বা ওয়েবসাইট কপি যাই হোক না কেন, পেশাদার কন্টেন্ট রাইটিংয়ে বিনিয়োগ আপনার অনলাইন উপস্থিতি উল্লেখযোগ্যভাবে উন্নত করতে পারে এবং জৈব ট্রাফিক ও রূপান্তর চালাতে সহায়তা করতে পারে।',
        'faq_10_q': '১০. আপনার কন্টেন্ট রাইটিং সেবাগুলিকে অন্যদের থেকে কী আলাদা করে?',
        'faq_10_a': 'আমাদের কন্টেন্ট রাইটিং সেবাগুলি তাদের গুণমান, প্রাসঙ্গিকতা এবং কৌশলগত পদ্ধতির জন্য আলাদা। আমরা শুধু কন্টেন্ট তৈরির জন্য তৈরি করি না; আমরা প্রতিটি অংশকে আপনার ব্র্যান্ড ভয়েস, লক্ষ্য দর্শক এবং এসইও লক্ষ্যগুলির সাথে সামঞ্জস্যপূর্ণ করি। দক্ষ লেখকদের আমাদের দল এমন কন্টেন্ট সরবরাহের উপর দৃষ্টি নিবদ্ধ করে যা শুধু আপনার দর্শকদের সম্পৃক্তই করে না বরং আপনার ব্যবসার জন্য অর্থপূর্ণ ফলাফলও চালনা করে, তা বর্ধিত ওয়েবসাইট ট্রাফিক হোক বা উচ্চতর রূপান্তর হার।',
        'faq_11_q': '১১. আপনি কি একটি বিদ্যমান ওয়েবসাইট পুনর্নির্মাণ করতে পারেন, নাকি আপনি শুধু নতুন তৈরি করেন?',
        'faq_11_a': 'একেবারে! আপনার কাছে একটি বিদ্যমান ওয়েবসাইট থাকলে যেটির একটি নতুন চেহারা প্রয়োজন বা আপনি স্ক্র্যাচ থেকে শুরু করছেন, আমরা উভয় ওয়েবসাইট পুনর্নির্মাণ এবং নতুন ওয়েবসাইট ডেভেলপমেন্ট সেবা প্রদান করি। আমাদের দল আপনার লক্ষ্য এবং পছন্দগুলি বোঝার জন্য আপনার সাথে ঘনিষ্ঠভাবে কাজ করে, নিশ্চিত করে যে শেষ ফলাফলটি আপনার ব্র্যান্ড পরিচয় এবং ব্যবসায়িক উদ্দেশ্যগুলির সাথে পুরোপুরি সামঞ্জস্যপূর্ণ। আমাদের বিশেষজ্ঞ ওয়েব ডেভেলপমেন্ট টিম নিশ্চিত করে যে আপনার সাইটটি দৃশ্যত আকর্ষণীয়ই নয় বরং কর্মক্ষমতা এবং কার্যকারিতার জন্যও অপটিমাইজড।',

        // ---------- Footer ----------
        'footer_about_title': 'sSBC সম্পর্কে',
        'footer_about_text': 'আমরা একটি শীর্ষস্থানীয় ডিজিটাল মার্কেটিং এজেন্সি যা ব্যবসার জন্য প্রভাবশালী অনলাইন উপস্থিতি তৈরিতে বিশেষজ্ঞ। আমাদের বিশেষজ্ঞ দল ফলাফল-চালিত সমাধান সরবরাহ করে।',
        'footer_quick_links': 'দ্রুত লিঙ্ক',
        'footer_our_services': 'আমাদের সেবাসমূহ',
        'footer_newsletter_title': 'নিউজলেটার',
        'footer_newsletter_text': 'সর্বশেষ আপডেট ও অফার পান',
        'footer_subscribe': 'সাবস্ক্রাইব',
        'footer_contact_title': 'যোগাযোগ করুন',
        'footer_address': 'sSBC পয়েন্ট, সামসাদিপুর, কাটাখালী, রাজশাহী, বাংলাদেশ।',
        'footer_phone': '+৮৮০ ১৭১৯ ৫৫০ ৭০০',
        'footer_email': 'info@ssbc.com',
        'footer_hours': 'রবি-বৃহঃ: সকাল ৯:০০ - সন্ধ্যা ৬:০০',
        'footer_follow': 'অনুসরণ করুন',
        'footer_copyright': '© ২০২৬ sSBC মার্কেটিং এজেন্সি। সর্বস্বত্ব সংরক্ষিত।',
        'footer_privacy': 'গোপনীয়তা নীতি',
        'footer_terms': 'শর্তাবলী',
        'footer_cookie': 'কুকি নীতি',

        // ---------- Buttons & Common ----------
        'read_more': 'আরও পড়ুন',
        'learn_more': 'আরও জানুন',
        'send_message': 'বার্তা পাঠান',
        'your_name': 'পুরো নাম',
        'your_email': 'ইমেইল ঠিকানা',
        'your_message': 'বার্তা',
        'contact_success': 'ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।',
        'newsletter_success': 'সাবস্ক্রাইব করার জন্য ধন্যবাদ!',
        'newsletter_invalid': 'একটি বৈধ ইমেইল দিন।',
        'article_not_found': 'নিবন্ধ পাওয়া যায়নি',
        'article_not_found_msg': 'আপনি যে নিবন্ধটি খুঁজছেন তা বিদ্যমান নেই বা সরানো হয়েছে।',
        'back_to_home': 'হোমপেজে ফিরে যান',
        'share_this': 'এই নিবন্ধটি শেয়ার করুন:',
        'find_us': 'আমাদের খুঁজুন',   // <--- add this line
    }
};

let currentLang = localStorage.getItem('ssbc_lang') || 'en';

// Translate all elements with data-i18n
function translatePage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'IMG') {
                el.alt = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key]; // use innerHTML to allow <span> etc.
            }
        }
    });

    // Update typed.js strings if the element exists
    if (typeof typed !== 'undefined' && typed) {
        typed.strings = [
            translations[lang]['typing_1'],
            translations[lang]['typing_2'],
            translations[lang]['typing_3'],
            translations[lang]['typing_4']
        ];
        typed.reset();
    }

    // Update language toggle button text
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = lang === 'en' ? 'EN' : 'BN';

    localStorage.setItem('ssbc_lang', lang);
    currentLang = lang;

    // Special handling for article page: reload article content
    if (window.location.pathname.includes('article.html')) {
        if (typeof loadArticle === 'function') {
            loadArticle(lang);
        }
    }
}

// Set up data-i18n attributes on page load (for dynamic elements)
document.addEventListener('DOMContentLoaded', function() {
    // Navbar menu items (already in menu.js, but ensure they have data-i18n)
    // This is a safety net – menu.js already sets them, but we'll re-apply to be safe
    const menuLinks = document.querySelectorAll('.menu-items > li > a');
    menuLinks.forEach(link => {
        const text = link.textContent.trim();
        // Map menu text to keys
        const keyMap = {
            'Home': 'home',
            'About': 'about',
            'Services': 'services',
            'Portfolios': 'portfolios',
            'Blogs': 'blogs',
            'Testimonials': 'testimonials',
            'FAQ': 'faq',
            'Contact': 'contact'
        };
        if (keyMap[text] && !link.hasAttribute('data-i18n')) {
            link.setAttribute('data-i18n', keyMap[text]);
        }
    });

    // Hero typing
    const heroSpan = document.querySelector('.hero-typing-1 span');
    if (heroSpan && !heroSpan.hasAttribute('data-i18n')) {
        heroSpan.setAttribute('data-i18n', 'I\'m a');
    }

    // Apply translation
    translatePage(currentLang);

    // Language toggle click handler
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = currentLang === 'en' ? 'bn' : 'en';
            translatePage(newLang);
        });
    }
});
