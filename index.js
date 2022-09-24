const markAllAsRead = document.getElementById("mark");
const notificationCount = document.getElementById("notification-count");
const notificationCard = document.querySelectorAll(".notification-card");
const bulletIcons = document.querySelectorAll("i")
const directMsg = document.getElementsByClassName("dm");


markAllAsRead.addEventListener('click', mark);


function mark() {
    for (const bulletIcon of bulletIcons) {
        bulletIcon.style.display = 'none';
        notificationCount.innerText = 0
      }
}



for (let card of notificationCard){
    card.addEventListener('click', function() {
        console.log("clicked");
    });
}


