/**
* Template Name: iPortfolio
* Updated: May 30 2023 with Bootstrap v5.3.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

  /**
   * Profile Image Pulse Effect on Hover
   */
  const profileImg = select('#header .profile img');
  if (profileImg) {
    profileImg.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.15) rotate(5deg)';
      this.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    });
    
    profileImg.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  }

  /**
   * Create Sparkle Effect
   */
  function createSparkle(x, y, container) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    container.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
  }

  /**
   * Section Entry Sparkle Animation
   */
  const sections = select('section', true);
  const sparkleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('sparkled')) {
        entry.target.classList.add('sparkled');
        
        // Create multiple sparkles
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            const rect = entry.target.getBoundingClientRect();
            const x = Math.random() * rect.width;
            const y = Math.random() * 300;
            createSparkle(x, y, entry.target);
          }, i * 100);
        }
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    section.style.position = 'relative';
    sparkleObserver.observe(section);
  });

  /**
   * Floating Particles Background
   */
  function createParticles() {
    const hero = select('#hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    hero.appendChild(particlesContainer);
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(particle);
    }
  }

  window.addEventListener('load', createParticles);

  /**
   * Skill Bar Glow Effect on Scroll
   */
  const progressBars = select('.progress-bar', true);
  progressBars.forEach(bar => {
    bar.addEventListener('animationend', function() {
      this.classList.add('glow-effect');
    });
  });

  /**
   * Interactive Count Boxes
   */
  const countBoxes = select('.count-box', true);
  countBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px) scale(1.05)';
      this.style.boxShadow = '0 15px 40px rgba(253, 109, 109, 0.3)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });

  /**
   * Resume Items Slide-in Effect
   */
  const resumeItems = select('.resume-item', true);
  const resumeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  resumeItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease-out';
    resumeObserver.observe(item);
  });

  /**
   * Cursor Trail Effect
   */
  let cursorTrail = [];
  const maxTrailLength = 10;

  document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.pageX + 'px';
      trail.style.top = e.pageY + 'px';
      document.body.appendChild(trail);
      
      cursorTrail.push(trail);
      
      if (cursorTrail.length > maxTrailLength) {
        const oldTrail = cursorTrail.shift();
        oldTrail.remove();
      }
      
      setTimeout(() => {
        trail.remove();
        cursorTrail = cursorTrail.filter(t => t !== trail);
      }, 500);
    }
  });

  /**
   * Section Title Animation
   */
  const sectionTitles = select('.section-title h2', true);
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('title-animate');
      }
    });
  }, { threshold: 0.5 });

  sectionTitles.forEach(title => {
    titleObserver.observe(title);
  });

})()