const squares = document.querySelectorAll('.square')
const orc = document.querySelector('.orc')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const highScore = document.querySelector('#high-score')
const start = document.querySelector('#start')

let highestScore = 0
let gameIsRunning = false

// start the game
start.addEventListener('mousedown', ()=> {
    let result = 0
    let hitPosition
    let currentTime = 30
    let timerId = null
    let speed = 2000
    
    if (!gameIsRunning){
        gameIsRunning = true
        console.log(`The has started.`)
        function randomSquare () {
            squares.forEach(square => {
                square.classList.remove('orc')
            })
        
            let randomSquare = squares[Math.floor(Math.random()*16)]
            randomSquare.classList.add('orc')
            hitPosition = randomSquare.id
        }
        
        // When clicking, if the square = the hitposition, you get 1 point added to your total points.
        
            squares.forEach(square => {
                square.addEventListener('mousedown', () => {
                    if(gameIsRunning){
                        if (square.id == hitPosition) {
                            result++
                            speed -= 100
                            hitPosition = null
                            score.textContent = result
                         } 
                        // else {
                        //     result--
                        //     score.textContent = result
                        //     hitPosition = null
                        // }
                    }
                }) 
            })
        
        function moveOrc (speed) {
            timerId = setInterval(randomSquare, speed)
        }
            moveOrc(speed)
        
        function countDown () {
            currentTime--
            timeLeft.textContent = currentTime
        
            if (currentTime == 0) {
                clearInterval(countDownTimerId)
                clearInterval(timerId)
                gameIsRunning = false
                if (result > highestScore) {
                    highestScore = result
                    highScore.textContent = result
                }
            }
        }
        let countDownTimerId = setInterval(countDown,1000)
    }  
})