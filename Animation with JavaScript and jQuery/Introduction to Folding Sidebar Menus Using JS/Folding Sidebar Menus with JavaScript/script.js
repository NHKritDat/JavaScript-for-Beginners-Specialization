(function() {
    'use strict';
    const submenus = document.querySelectorAll('ul li ul');
		
    function hideSubmenus() {
        for (let i = 0; i < submenus.length; i++) {
            submenus[i].className = 'hide-menu';
        }
    }
    
    hideSubmenus();
    
    const menulinks = document.querySelectorAll('.menulink');

    for (let i = 0; i < menulinks.length; i++) {
        menulinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            const thisMenu = this.parentNode.querySelector('ul');
            if (thisMenu.classList.contains('hide-menu')) {
                hideSubmenus();
                thisMenu.className = 'show-menu';
            } else {
                thisMenu.className = 'hide-menu';
            }
        });
    }
})();