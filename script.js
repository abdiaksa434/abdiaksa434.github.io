// kelas navbar
const navbarList = document.querySelector ('.navbar-list');
//  ketika hamburger menu di klik
document.querySelector ('#hamburger-menu').onclick = ( ) => {
    navbarList.classList.toggle ('active');
}