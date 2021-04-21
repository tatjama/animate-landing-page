const textMove = (value) => {
    if(value > 50 && value < 210 ){
        const text1 = document.querySelector('.section-three_title-one');
        const text2 = document.querySelector('.section-three_title-two');
        const text2s = document.querySelector('.section-three_title-two sup:first-child');
        const text3 = document.querySelector('.section-three_title-three');
        const text4 = document.querySelector('.section-three_title-four');
         text1.style.left = 120 - (value)/2.3  + '%';         
         text2.style.left = 120 - (value*2-150)/2.6   + '%';
         text3.style.left = 120 - (value*3-300)/3.4   + '%';
         text4.style.left = 120 - (value*4-390)/4.6  + '%';
         text1.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value) / 60) + ')';
         text2.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value) / 50) +')';
         text2s.style.border = '3px solid rgba(0, 0, 0, ' + (0.25 * (value) / 50) +')';
         text3.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value ) / 50) +')';
         text4.style.color = 'rgba(0, 0, 0, ' + (0.25 * (value ) / 50) + ')';
    }
}

const handleOnLoad = () =>{window.onscroll = () => scrollApp();}
const scrollApp = () => {
    // Scroll value
    let value = window.scrollY;
    textMove(value);
    
}
