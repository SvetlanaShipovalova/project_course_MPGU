window.onload = function () {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)){
        window.location.assign("index-mobile.html");
    }
    document.querySelector('#SITE-HEADER').style.position = "fixed";
    document.querySelector('#header-00').style.minWidth = "980px";
    document.querySelector('#footer').style.minWidth = "980px";
    document.querySelector('#contact').style.minWidth = "980px";
    document.querySelector('#contact-00').style.minWidth = "980px";
    document.querySelector('#info-00').style.minWidth = "980px";
    document.querySelector('#info-00-02').style.minWidth = "980px";
    document.querySelector('.app01').style.minWidth = "980px";
    document.querySelector('.app02').style.minWidth = "980px";
    document.querySelector('#intro-00').style.minWidth = "980px";
}
