const navbarBehavior = function (){
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar__toggler');
    const navbarMenu = document.querySelector('.navbar__menu');
    let animationStopTimer = null;

    window.onscroll = function(){
        if(window.pageYOffset > 0){
            navbar.classList.add('navbar__scroll');
        }
        else{
            navbar.classList.remove('navbar__scroll');
        }
    }

    window.onresize = function(){
        document.body.id = 'stop-animations';
        animationStopTimer = setTimeout(function(){
            document.body.id = '';
        },100);
    }

    navbarToggler.onclick = function(){
        navbarMenu.classList.toggle('navbar__toggle');
        navbarToggler.setAttribute('aria-expanded',getContraryAriaExpanded());
    }

    function getContraryAriaExpanded(){
        let ariaExpanded = navbarToggler.getAttribute('aria-expanded');

        return ariaExpanded === 'true' ? 'false' : 'true';
    }


    return{
        navbar:navbar
    }
}();
