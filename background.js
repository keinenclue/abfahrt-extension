var buttons = document.querySelectorAll('button[type="submit"]')
for(let i = 0; i < buttons.length; i++) {
    buttons[i].title = buttons[i].innerText;
    buttons[i].innerText = "Abfahrt!🚗💨";  
}


