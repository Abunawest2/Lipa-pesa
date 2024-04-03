const menuIcon = document.getElementById("switchIcon");
const dashboardSidePanel = document.getElementById("left-side-dashboard");
const mainLayout = document.getElementById("main-layout");

Array.from(document.getElementsByTagName('nav')).forEach(nav => {
    nav.style.borderLeft = '1px solid black';
});

menuIcon.addEventListener('click', expandSidePanel)
document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('#dashboardSidePanel') && !target.closest('a') && target !== menuIcon) {
        menuIcon.style.left = '62px'
        menuIcon.style.rotate = '360deg'
        dashboardSidePanel.style.width = '70px'
        mainLayout.classList.remove("d-main-section-new-margin")
        document.getElementById('title-logo').style.display = 'none'
        document.getElementById('small-screen-app-title').style.display = 'block';
        Array.from(document.querySelectorAll('.icon-labels')).forEach(
            (labels) => {
                labels.style.opacity = '0'

            }
        )
    }
});



function expandSidePanel(){
    if (dashboardSidePanel.style.width === '70px' ) {
        menuIcon.style.left = '160px'
        menuIcon.style.rotate = '180deg'
        dashboardSidePanel.style.width = '170px'
        mainLayout.classList.toggle("d-main-section-new-margin")
        document.getElementById('title-logo').style.display = 'flex'
        document.getElementById('small-screen-app-title').style.display = 'none';
        Array.from(document.querySelectorAll('.icon-labels')).forEach(
            (labels) => {
                labels.style.opacity = '100%'

            }
        )
    } else{
        menuIcon.style.left = '62px'
        menuIcon.style.rotate = '360deg'
        dashboardSidePanel.style.width = '70px'
        mainLayout.classList.remove("d-main-section-new-margin")
        document.getElementById('title-logo').style.display = 'none'
        document.getElementById('small-screen-app-title').style.display = 'block';
        Array.from(document.querySelectorAll('.icon-labels')).forEach(
            (labels) => {
                labels.style.opacity = '0'

            }
        )
    }
}

// Notification icon listener

console.log(document.getElementById('notifications'));

document.getElementById('alert-bell').addEventListener('click', () => {

    if (document.getElementById('notifications').style.display === 'none') {
        document.getElementById('notifications').style.display = 'flow-root';
    } else{
        document.getElementById('notifications').style.display = 'none';
    }
    
    
})

document.getElementById('notification-arrowback').addEventListener('click', () => {

    if (document.getElementById('notifications').style.display === 'none') {
        document.getElementById('notifications').style.display = 'flow-root';
    } else{
        document.getElementById('notifications').style.display = 'none';
    }
    
    
})