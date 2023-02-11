const notification = document.getElementById('notification')

const notiCard = document.querySelectorAll('.noti-card')

const unreadMessages = document.querySelectorAll('.unread')
const markAll = document.getElementById('mark_all')

notification.innerText = unreadMessages.length;

unreadMessages.forEach(message => {
    message.addEventListener('click', () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread")
        notification.innerText = newUnreadMessages.length;
    })
})

markAll.addEventListener('click', () => {
    unreadMessages.forEach(message => {
        message.classList.remove("unread")
    })

    const newUnreadMessages = document.querySelectorAll('.unread')
    notification.innerText = newUnreadMessages.length;
})