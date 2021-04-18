function handleOnLoad(){
    window.onscroll = () => scrollApp();
}   
    
    //Sticky Navigation Two
    const navTwo = document.querySelector(".nav-two");
    //Sticky Navigation Two Inner
    const navTwoWrapperSecond = document.querySelector(".nav-two_wrapper--second");
    const sticky = navTwo.offsetTop;
    //Navigation Element to move left
    const navTwoItemMove = document.querySelector(".nav-two_item--move");
    //Navigation Links from Move Element to be Active
    const linksMove = document.getElementsByClassName("nav-two_a--move");

    const scrollApp = () => {
        navScroll();
        linkMoveToActive();
    }

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