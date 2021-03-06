//Sticky Navigation Two
const navTwo = document.querySelector(".nav-two");
//Sticky Navigation Two Inner
const navTwoWrapperSecond = document.querySelector(".nav-two_wrapper--second");
const sticky = navTwo.offsetTop;
//Navigation Element to move left
const navTwoItemMove = document.querySelector(".nav-two_item--move");
//Navigation Links from Move Element to be Active
const linksMove = document.getElementsByClassName("nav-two_a--move");


const navScroll = () => {(screen.width<= 768)?stickyNavTwoResponsive() :stickyNavTwo();}

const stickyNavTwo = () => {
    if(window.pageYOffset >= sticky){
        navTwo.classList.add("nav-two--sticky");
        navTwoWrapperSecond.classList.add("nav-two_wrapper--sticky");                
    }else{
        navTwo.classList.remove("nav-two--sticky")
        navTwoWrapperSecond.classList.remove("nav-two_wrapper--sticky")
    };
    navTwoItemMove.style.right = (pageYOffset-335 >= 0)?"0px": pageYOffset-335 + "px";
}

const stickyNavTwoResponsive = () => {
    (window.pageYOffset >= sticky)? navTwo.classList.add("nav-two--sticky"): navTwo.classList.remove("nav-two--sticky")                       
}

//Links from Navigation Two in Move change to Active
const linkMoveToActive = () => {                       
    for(let i = 0; i < linksMove.length; i++){                               
     if( window.pageYOffset < 200 * i ){
          linksMove[i].classList.remove("nav-two_a--active");
    }else{ 
         linksMove[i].classList.add("nav-two_a--active");
         if( window.pageYOffset >= 200 * (i + 1)){ linksMove[i].classList.remove("nav-two_a--active")}
    }             
    }
}
const textMove = (value) => {
    if(value > 450 && value < 850 ){
        const text1 = document.querySelector('.section-three_title-one');
        const text2 = document.querySelector('.section-three_title-two');
        const text2s = document.querySelector('.section-three_title-two sup:first-child');
        const text3 = document.querySelector('.section-three_title-three');
        const text4 = document.querySelector('.section-three_title-four');
         text1.style.left = 120 - (value-460)/4.3  + '%';         
         text2.style.left = 120 - (value*2-990)/6.6   + '%';
         text3.style.left = 120 - (value*4-2550)/8.3   + '%';
         text4.style.left = 120 - (value*5-3590)/7   + '%';
         text1.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value - 350) / 150) + ')';
         text2.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value * 2 - 1200) / 150) +')';
         text2s.style.border = '3px solid rgba(0, 0, 0, ' + (0.25 * (value * 2 - 1200) / 150) +')';
         text3.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value * 3 - 2000) / 150) +')';
         text4.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value * 4 - 2900) / 150) + ')';
    }
}

const handleOnLoad = () =>{window.onscroll = () => scrollApp();}
const scrollApp = () => {
    // Scroll value
    let value = window.scrollY;
    navScroll();
    linkMoveToActive();
    textMove(value);
    
}

/* HTML collection
const navLinks = document.getElementsByClassName("nav-two_a");
function sentToPage() {
    console.log("sentToPage")
}
Array.from(navLinks).forEach((element) =>{
    element.addEventListener("click",sentToPage)
})*/
/*for(let i=0; i< navLinks.length; i++){
    navLinks[i].addEventListener("click", sentToPage)
}*/
/*for(navLink of navLinks){
    navLink.addEventListener("click", sentToPage)
}*/
