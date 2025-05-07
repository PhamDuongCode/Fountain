document.addEventListener("DOMContentLoaded", function(){
    let home = document.getElementById("home");
    home.addEventListener("click", function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })
let menuToggle = document.getElementById("menuToggle");
let mobileNav = document.getElementById("mobileNav");
let barsIcon = document.getElementById("bars-icon");
let closeIcon1 = document.getElementById("close-icon1");
menuToggle.addEventListener("click", function(){
    mobileNav.classList.toggle("active1")
    if(mobileNav.classList.contains("active1")){
        barsIcon.style.display = "none";
        closeIcon1.style.display = "block";
    }else{
        barsIcon.style.display = "block";
        closeIcon1.style.display = "none";
    }
})
let userAccount = document.getElementById("userAccount");
let userAccountNav = document.getElementById("userAccountNav");
let avaIcon = document.getElementById("ava-icon");
let closeIcon2 = document.getElementById("close-icon2");
userAccount.addEventListener("click", function(){
    // Thêm class active vào mobile nav
    // Nếu đã có active thì bỏ đi, nếu chưa có thì thêm vào
    userAccountNav.classList.toggle("active2")
    if(userAccountNav.classList.contains("active2")){
        avaIcon.style.display = "none";
        closeIcon2.style.display = "block";
    }else{
        avaIcon.style.display = "block";
        closeIcon2.style.display = "none";
    }
})
})