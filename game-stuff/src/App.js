
import React from 'react'
import Sketch from 'react-p5'
import megaman from './megaman-sprite.png'

function App() {
 let sprite;
  
 
   let x = 0
   let y = 0

   
 
 const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef)
    sprite = p5.loadImage(megaman, sprite => {
      p5.image(sprite, x, y);
    }
   
    );
    console.log(sprite)
    
  }
  
  const draw = p5 => {
   
  //  if (sprite.length > 0) {
    
    
  //  }
   p5.background(255, 130, 20)
   p5.image(sprite, x, y)
  }
  
  return <Sketch setup={setup} draw={draw} />
}

export default App
