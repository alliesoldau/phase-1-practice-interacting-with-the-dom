// Increment the timer by 1 second once the page has loaded
let counter = document.querySelector('#counter')
let plusMinusMonitor = 1 // start at 1 so it increments correctly
counter.innerText = 0 // start the counter at zero
let intervalID

document.addEventListener('DOMContentLoaded', startCount) 
function startCount() { counter.innerText = plusMinusMonitor++ }
intervalID = setInterval(startCount, 1000)
function refreshInterval() { 
    counter.innerText = plusMinusMonitor++ 
    intervalID = setInterval(startCount, 1000)
}
       
// Manuallly increment and decrement the counter by clicking + and -
let plus = document.querySelector('#plus')    
plus.addEventListener('click', (event) => {
    event.preventDefault()
    plusMinusMonitor++
})
let minus = document.querySelector('#minus')    
minus.addEventListener('click', (event) => {
    event.preventDefault()
    plusMinusMonitor--
})

// Pause the counter and disable the buttons
let pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (pauseButton.innerText === 'pause') {
        pauseButton.innerText ='resume'
        clearInterval(intervalID)
        plus.disabled = true
        heart.disabled = true
        minus.disabled = true
    } else {
        pauseButton.innerText = 'pause'
        refreshInterval(intervalID)
        plus.disabled = false
        heart.disabled = false
        minus.disabled = false
    }
})

// Add likes to each number and dispaly them as a list
let numbersArray = []
let numberOfLikes;

let heart = document.querySelector('#heart')
heart.addEventListener('click', (event) => {
    event.preventDefault()
    let currentNumber = document.querySelector('#counter')
    let num = currentNumber.innerText // grab the current ticker number 
    if (numbersArray.includes(num)) {
        let matchingLi = document.getElementById(num) // grab the number that already exists
        matchingLi.innerText = `${num} was liked ${numberOfLikes++} times` // update it's likes by 1
    } else {
        let likesLi = document.createElement('li') // otherwise create a new li element
        likesLi.id = num // update the id of this new element with the current number
        likesLi.innerText = `${num} was liked ${numberOfLikes=1} times`
        let showLikes = document.querySelector('.likes') // grab the ul where the lis should go
        showLikes.append(likesLi)
        numbersArray.push(num)
        console.log(numbersArray)
    }
})

// Leave comments
let form = document.querySelector('form')
let list = document.getElementById('list')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const comment = document.getElementById('comment-input').value
    const p =  document.createElement('p')
    p.innerText = comment
    list.append(p)
})

