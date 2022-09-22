const markAllAsRead = document.getElementById("mark");
const notificationCount = document.getElementById("notification-count");
const notificationCard = document.getElementById("notification-card");
const bulletIcons = document.querySelectorAll("i")
const directMsg = document.getElementsByClassName("dm");


markAllAsRead.addEventListener('click', mark);

function mark() {
    for (const bulletIcon of bulletIcons) {
        bulletIcon.style.display = 'none';
      }
}




