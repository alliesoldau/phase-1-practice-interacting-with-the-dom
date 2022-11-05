// Increment the timer by 1 second once the page has loaded
let counter = document.querySelector('#counter')
let plusMinusMonitor = 1 // start at 1 so it increments correctly
counter.innerText = 0 // start the counter at zero

document.addEventListener('DOMContentLoaded', () => {
    setInterval(function () {
        counter.innerText = plusMinusMonitor++
        // console.log(counter.innerText)
        }, 1000)
    })

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

let numbersArray = []
let numberOfLikes;

let heart = document.querySelector('#heart')
heart.addEventListener('click', (event) => {
    event.preventDefault()
    let currentNumber = document.querySelector('#counter')
    let num = currentNumber.innerText // grab the current ticker number 
   // let showLikes = document.querySelector('.likes') // grab the ul where the lis should go
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

