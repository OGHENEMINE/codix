(function () {
    var words = ["No. 1 Investment Platform.", "Codix. Investment made easy!", "Make money while you sleep."],
    i = 0;
    setInterval (function(){
     $("#wordAnimate").fadeOut(function () {
         $(this).html(words[(i = (i + 1)) % words.length]).fadeIn();});
    }, 4000)
 }) ();

 //navbar color chnage on scroll
const nav = document.getElementById("mainNav");

window.onscroll = function (){
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >=200){
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    }else{
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
}

