
import React from 'react'
import Sketch from 'react-p5'
import megaman from './megaman-sprite.png'
import Score from './Score';

function App() {
 let sprite;
  
 
   let x = 100
   let y = 100
  let frames = []
  let frame = 0
   
  let score = 0

  let timer = () => {
      console.log(score)
      setInterval(function () {
          score++
      }, 500)
  }
 const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
    getFrames(p5)
    
    
  }
  const getFrames = (p5) => {
    sprite = p5.loadImage(megaman, sprite => {
      let xpos = 0
        for (let i = 0; i < 5; i++) {
          frames.push(sprite.get(xpos, 0, 64, 69))
          p5.image(frames[i], 100, 100);
          xpos += 70
        }
      
    }
   
    );
  }

  timer()

  const draw = p5 => {
   
  //  if (sprite.length > 0) {
    
    

  //  }
  p5.frameRate(20)
   p5.background(255, 130, 20)
   p5.text('SCORE:', 10, 50); 
   p5.text(score, 60, 50);
  const getframe = (p5) => {
    

    if (frame >= 4) {
      frame = 0

    }
   
    
    if (x > p5.width || x < 0) {
      x = 0
    }

    if (y > 325) {
      y = 325
    }

    if (y < 0) {
      y = 0
    }
    
    if (p5.keyCode === 39) {
      p5.image(frames[frame], x, y)
      frame++
      x +=10
    }

    if (p5.keyCode === 40) {
      p5.image(frames[frame], x, y)
      
      y +=10
    }

    if (p5.keyCode === 38) {
      p5.image(frames[frame], x, y)
      
      y -=10
    }
    if (p5.keyCode === 37) {
      p5.image(frames[frame], x, y)
      
      x -=10
    }
    else {
      
      p5.image(frames[frame], x, y)
      
    }
    
  }
  {frames.length == 5 && getframe(p5)}
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default App

