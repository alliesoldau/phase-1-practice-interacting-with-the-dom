// Increment the timer by 1 second once the page has loaded
document.addEventListener('DOMContentLoaded', () => {
    let counter = document.querySelector('#counter')
    let counterInt = 1 // we have to start incrementing at 1 
    // because we tell the function to wait 1 second before doing anything, 
    // so if it starts at 0 it will be 0 for 2 seconds before going to 1
        // console.log(counter)
        // console.log('counter text: ' + counterInt)
    setInterval(function () {
        counter.innerHTML = counterInt++
        }, 1000)
    })

// Manuallly increment and decrement the counter by clicking + and -
// add event listeners to + and -
    // if + click, change counter.innerHTML up by 1
    // if - click, change counter.innerHTML down by 1

let plus = document.querySelector('#plus')    
plus.addEventListener('click', (event) => {
    event.preventDefault()
    let counter = document.querySelector('#counter')
    counter.innerHTML++
})

let minus = document.querySelector('#minus')    
plus.addEventListener('click', (event) => {
    event.preventDefault()
    let counter = document.querySelector('#counter')
    counter.innerHTML--
})


