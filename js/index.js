window.onload = function(){
    var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("is-active")
        var containerMenu = document.getElementsByClassName("container-menu");
        containerMenu[0].classList.toggle("active");
        document.body.classList.toggle("opacity");
    })

    
    window.onscroll = (e) => {
        var nav = document.getElementsByTagName("nav");
        if(document.body.scrollTo > 40 || document.documentElement.scrollTop > 40){
            nav[0].className = "nav2";
        }else{
            nav[0].className = "";
        }
    }
    

}