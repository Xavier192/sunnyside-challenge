const navbarBehavior = function (){
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar__toggler');
    const navbarMenu = document.querySelector('.navbar__menu');

    window.onscroll = function(){
        if(window.pageYOffset > 0){
            navbar.classList.add('navbar__scroll');
        }
        else{
            navbar.classList.remove('navbar__scroll');
        }
    }

    navbarToggler.onclick = function(){
        navbarMenu.classList.toggle('navbar__toggle');
    }


    return{
        navbar:navbar
    }
}();
