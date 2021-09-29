import React from 'react'

function Score() {

let score = 0

let timer = () => {
    console.log(score)
    setInterval(function () {
        score++
    }, 2000)
}




    return(
        <div className="score">
            <h1> SCORE</h1>
            <p>{timer()}</p>
        </div>
    )
    
}

export default Score;