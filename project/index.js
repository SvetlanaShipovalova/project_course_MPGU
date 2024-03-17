window.onload = function () {
    let viewport = document.querySelector('meta[name=viewport]');
    let body = document.querySelector('body');
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)){
        // window.location.assign("index-mobile.html");
        viewport.setAttribute('content', 'width=320, user-scalable=0');
        body.classList.add('device-mobile-optimized');
        
        const moveAppPicture = () => {
            const elementToMove = document.querySelector('#app-02-20');
            const newParentElement = document.querySelector('.app-move');
            const siblingElement = newParentElement.querySelector('#app-02-10');
            newParentElement.insertBefore(elementToMove, siblingElement);
        }
        moveAppPicture();
    }
    else {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1');
        
        const moveEl = (elToMove, parent, sblEl) => {
            const elementToMove = document.querySelector(`${elToMove}`);
            const newParentElement = document.querySelector(`${parent}`);
            const siblingElement = newParentElement.querySelector(`${sblEl}`);
            newParentElement.insertBefore(elementToMove, siblingElement);
        }
        moveEl('#app-02-10', '.app-move', '#app-02-20');
        moveEl('#footer-01-14', '#footer-01', '#footer-01-13');
        // document.querySelector('#SITE-HEADER').style.position = "fixed";
        // document.querySelector('#header-00').style.minWidth = "980px";
        // document.querySelector('#footer').style.minWidth = "980px";
        // document.querySelector('#contact').style.minWidth = "980px";
        // document.querySelector('#contact-00').style.minWidth = "980px";
        // document.querySelector('#info-00').style.minWidth = "980px";
        // document.querySelector('#info-00-02').style.minWidth = "980px";
        // document.querySelector('.app01').style.minWidth = "980px";
        // document.querySelector('.app02').style.minWidth = "980px";
        // document.querySelector('#intro-00').style.minWidth = "980px";
    }

    document.addEventListener('scroll', function () {
        const top = document.querySelector('#intro');
        const app = document.querySelector('#app');
        const story = document.querySelector('#story');
        const topTag = document.querySelector('.top-link');
        const appTag = document.querySelector('.app-link');
        const storyTag = document.querySelector('.story-link');
        const elements = [top, app, story];
        const links = [topTag, appTag, storyTag];

        elements.forEach((el, i) => {
            isInViewport(el) ? links[i].setAttribute('data-state', 'selected') : links[i].removeAttribute('data-state', 'selected')
        })
        
    });
}


function isInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
}

