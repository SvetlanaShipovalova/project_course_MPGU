window.onload = function () {
    if (navigator.userAgent.match(/Windows/i)){
        window.location.assign("index.html");
    }
    document.querySelector('#PAGES-CONTAINER').style.top= "0px";
    document.querySelector('#SITE-FOOTER').style.top= "0px";
    document.querySelector('#SITE-HEADER').style.position= "relative";

}
