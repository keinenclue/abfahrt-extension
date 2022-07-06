var buttons = document.querySelectorAll('button[type="submit"]')
var inputs = document.querySelectorAll('input[type="submit"]')
for(let i = 0; i < buttons.length; i++) {
    buttons[i].title = buttons[i].innerText;
    buttons[i].innerText = buttons[i].clientWidth < 50 ? "🚗" : "Abfahrt!🚗💨";  
}
inputs.forEach(input => {
    input.title = input.value;
    input.value = "Abfahrt!🚗💨";  
})


