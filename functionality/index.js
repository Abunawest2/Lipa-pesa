// const menu = document.getElementById("menu-bar");
const smallmenu = document.getElementById("small-menu");
const left_side_section = document.getElementById("left-side");
const small_screen_section = document.getElementById("small-screen-style");
const iconId = document.getElementById("iconId");
const menu_icon = document.getElementsByTagName("i");
const banner = document.getElementById("header");
const main_layout = document.getElementById("main-layout");
const heading2 = document.querySelectorAll('.benefit-headings')
const benefit = document.getElementsByClassName('.benefit');

console.log(heading2);

Array.from(heading2).forEach((heading) =>{
    heading.style.fontSize = '24px'
})

// Event listener to toggle left_side_section visibility
// Event listener to toggle left_side_section visibility
iconId.addEventListener('click', () => {
    if (left_side_section.style.display === 'none') {
        showLeftSide();
    } else {
        hideLeftSide();
    }
});

// Event listener to hide left_side_section when clicking outside of it
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('#left_side_section') && !target.closest('a') && target !== iconId) {
        hideLeftSide();
    }
});

// Function to show left_side_section
function showLeftSide() {
    left_side_section.style.display = 'flex';
    main_layout.classList.toggle('main-section-new-margin');
    main_layout.classList.add('scrol');
    document.getElementById('small-screen-app-title').style.display = 'none';
    Array.from(document.getElementsByTagName('nav')).forEach(nav => {
        nav.style.borderLeft = '1px solid black';
    });
    Array.from(heading2).forEach((heading) =>{
        heading.style.fontSize = '15px'
    })
}

// Function to hide left_side_section
function hideLeftSide() {
    left_side_section.style.display = 'none';
    main_layout.classList.remove('main-section-new-margin');
    main_layout.classList.remove('scrol');
    document.getElementById('small-screen-app-title').style.display = 'block';
    Array.from(document.getElementsByTagName('nav')).forEach(nav => {
        nav.style.borderLeft = 'none';
    });
    Array.from(heading2).forEach((heading) =>{
        heading.style.fontSize = '24px'
    })
}

Array.from(document.getElementsByTagName('a')).forEach((links) => {
    links.addEventListener('click', hideLeftSide)
});


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