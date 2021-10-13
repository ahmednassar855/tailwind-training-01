const NavBarButton = document.querySelector('#NavBarButton');
const navBarMenu = document.querySelector('#navBarMenu');

NavBarButton.addEventListener('click', () => {
    if(navBarMenu.classList.contains('hidden')){
        navBarMenu.classList.remove('hidden');
       
    } else {
        navBarMenu.classList.add('hidden');
    }
    
})
