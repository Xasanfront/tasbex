const display = document.querySelector('.display')
const add = document.querySelector('.btn1')
const restart = document.querySelector('.btn2')

let count = 0

add.addEventListener('click', () => {
    count++
    if(count > 33) {
        count = 1
    }
    display.textContent = count
})

restart.addEventListener('click', () => {
    count = 0
    display.textContent = count
})