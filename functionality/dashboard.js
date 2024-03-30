const menuIcon = document.getElementById("iconId");
    dashboardSidePanel = document.getElementById("left-side-dashboard");
    mainLayout = document.getElementById("main-layout");

console.log(mainLayout);

menuIcon.addEventListener('click', expandSidePanel)

function expandSidePanel(){
    if (dashboardSidePanel.style.width === '70px' ) {
        dashboardSidePanel.style.width = '170px'
        mainLayout.classList.toggle("d-main-section-new-margin")
        document.getElementById('title-logo').style.display = 'flex'
        Array.from(document.querySelectorAll('.icon-labels')).forEach(
            (labels) => {
                labels.style.opacity = '100%'

            }
        )
    } else{
        dashboardSidePanel.style.width = '70px'
        mainLayout.classList.remove("d-main-section-new-margin")
        document.getElementById('title-logo').style.display = 'none'
        Array.from(document.querySelectorAll('.icon-labels')).forEach(
            (labels) => {
                labels.style.opacity = '0'

            }
        )
    }
}

