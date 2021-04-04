// Detect if a link's href goes to the current page
function getSamePageAnchor (link) {
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false;
  }

  return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if(elem) {
    if(e) e.preventDefault();
    gsap.to(window, {scrollTo: elem});
  }
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('nav a[href]').forEach(a => {
  a.addEventListener('click', e => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);






   gsap.registerPlugin(ScrollTrigger);
   gsap.registerPlugin(ScrollToPlugin);

  




  const tl = gsap.timeline({ defaults: { duration:1 }})
  tl
  .from('.navbar' ,
  {
     y:"-100%", opacity:0})
     .from('.nav-link',{ 
         opacity:0, stagger:.2
      })

 .from(".header-left", 
 {
           x:"-101vw", opacity:0 , stagger:.2 , ease:Back.easeOut },.5)

 gsap.from('.feature', 
             {
               scrollTrigger:'.feature',
              duration:1, y:"100", opacity:0 , stagger:.1 })

 gsap.from('.left-img', 
             {
               scrollTrigger:'.left-img',
              duration:1, x:"-100vw", opacity:0 , stagger:.1 })
 gsap.from('.right-img', 
             {
               scrollTrigger:'.right-img',
              duration:1, x:"100vw", opacity:0 , stagger:.1 })
 gsap.from('.download-list', 
             {
               scrollTrigger:'.download-list',
              duration:1, y:"100", opacity:0 , stagger:.1 })
 gsap.from('.city-list', 
             {
               scrollTrigger:'.city-list',
              duration:1, y:"100", opacity:0 , stagger:.1 })
 gsap.from('.blockquote-list', 
             {
               scrollTrigger:'.blockquote-list',
              duration:1, y:"-100", opacity:0 , stagger:.1 })
 gsap.from('.card-list', 
             {
               scrollTrigger:'.card-list',
              duration:1, x:"100vh", opacity:0 , rotation:360, stagger:.1 , ease:Power2.easeOut })
 gsap.from('.contact', 
             {
               scrollTrigger:'.contact',
              duration:1, y:"100", opacity:0 , stagger:.1 , ease:Power2.easeOut })

 gsap.from('#footer a', 
              {
                scrollTrigger:'#footer a',
               duration:1, x:"100vh", opacity:0 , rotation:360, stagger:.1 , ease:Power2.easeOut })

 
