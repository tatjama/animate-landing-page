
        const navOneMenuOneSeries = document.querySelector('.nav-one_menu--one-series');
        const navOneMenuNordSeries = document.querySelector('.nav-one_menu--nord-series');
        const navOneMenuShop = document.querySelector('.nav-one_menu--shop');
        const navOneMenuAvatar = document.querySelector('.nav-one_menu--avatar');
        const navOneMenuBag = document.querySelector('.nav-one_menu--bag');
        const navOneMenu = document.querySelector('.nav-one_menu');
        const navOneMenuClose = document.querySelector('.nav-one_menu--responsive::before');
        
        const showMenu = (element, value) =>  element.style.right = value;
        const hideMenu = (element, value) =>  element.style.right = value;

        const openResponsiveMenu = () => {
            navOneMenu.style.display ="block";
            navOneMenu.classList.add('nav-one_menu--responsive');
        }
        const closeResponsiveMenu = () => {
            navOneMenu.style.display = "none";
            navOneMenu.classList.remove('nav-one_menu--responsive');
        }