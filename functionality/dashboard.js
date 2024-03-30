const menuIcon = document.getElementById("iconId");
    dashboardSidePanel = document.getElementById("left-side-dashboard");
    mainLayout = document.getElementById("main-layout");

console.log(mainLayout);

menuIcon.addEventListener('click', expandSidePanel)

function expandSidePanel(){
    if (dashboardSidePanel.style.width === '90px' ) {
        dashboardSidePanel.style.width = '250px'
        mainLayout.classList.toggle("d-main-section-new-margin")
        document.getElementById('title-logo').style.display = 'flex'
        Array.from(document.querySelectorAll('.icon-labels')).forEach(
            (labels) => {
                labels.style.opacity = '100%'

            }
        )
    } else{
        dashboardSidePanel.style.width = '90px'
        mainLayout.classList.remove("d-main-section-new-margin")
        document.getElementById('title-logo').style.display = 'flex'
        Array.from(document.querySelectorAll('.icon-labels')).forEach(
            (labels) => {
                labels.style.opacity = '0'

            }
        )
    }
}

