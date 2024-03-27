// const menu = document.getElementById("menu-bar");
const smallmenu = document.getElementById("small-menu");
const left_side_section = document.getElementById("left-side");
const small_screen_section = document.getElementById("small-screen-style");
const iconId = document.getElementById("iconId");
const menu_icon = document.getElementsByTagName("i");
const banner = document.getElementById("header");
const main_layout = document.getElementById("main-layout");
const heading2 = document.getElementsByClassName('benefit-headings')

// menu_icon[0].style.display = "none"

console.log(heading2)

iconId.addEventListener('click', () => {
    if (left_side_section.style.display === 'none') {
        left_side_section.style.display = 'flow-root'
        main_layout.classList.toggle('main-section-new-margin')
        main_layout.classList.add("scrol");
        document.getElementById('small-screen-app-title').style.display = 'none'

        for (const nav of document.getElementsByTagName('nav')) {
            nav.style.borderLeft = '1px solid black'
        }
        
        for (let heading of heading2) {
            heading.classList.toggle('font-size')
        }

    } else {
        left_side_section.style.display = 'none'
        main_layout.classList.remove('main-section-new-margin')
        main_layout.classList.remove("scrol");
        document.getElementById('small-screen-app-title').style.display = 'block'
        for (const nav of document.getElementsByTagName('nav')) {
            nav.style.borderLeft = 'none'
        }

    }
})

// left_side_section.addEventListener('click', (event) => {
//     if (event.target.tagName === 'a') {
//         event.stopPropagation(); // Prevent the body click event from triggering
//     } else{
//         left_side_section.style.display = 'flow-root'
//     }
// });








// console.log(menu)

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

// menu.addEventListener('click', display)