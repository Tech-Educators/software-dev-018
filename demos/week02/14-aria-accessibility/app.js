// 1. get the elements
const notificationDisplay = document.getElementById('notificationDisplay')
const notificationButton = document.getElementById('notification')

notificationButton.addEventListener('click', function() {
    notificationDisplay.innerText = 'New email in your inbox!!'
})