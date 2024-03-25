const menu = document.getElementById("menu-bar");
const smallmenu = document.getElementById("small-menu");
const banner = document.querySelector("logo");

console.log(menu)

const display = () => {
    if (smallmenu.style.display === "none") {
        smallmenu.style.display = "flex"
        banner[0].style.display = "none"
    } else{
        smallmenu.style.display = "none"
    }
}

// document.addEventListener('click', function(event) {
//     const targetElement = event.target; // clicked element

//     if (!targetElement.closest('#small-menu') && !targetElement.closest('#menu')) {
//         // Close the menu if the click is outside of hidden-screen and menu-icon
//         smallmenu.style.display = 'none';
//     }
// });

menu.addEventListener('click', display)