
let scrool1=window.pageYOffset;
window.onscroll=function() {
    let scrool2=window.pageYOffset;
    if(scrool1 > scrool2) {
        document.querySelector(".nav").style.top="0";
    }else {
        document.querySelector(".nav").style.top="-100px";
    }
    scrool1 = scrool2;
}




