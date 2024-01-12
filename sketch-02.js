/* sketch-02.js
Creative Coding
Unit 3: Transform
Matt Harrison, 12/01/24
*/
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    // const x = 0; // fixed position at origin (top left)
   //  const y = 0;
   // use relative x y pos to transform placement

    const x = width  * 0.5;  // square's top corner is 50% across screen
    const y = height * 0.5;  // relative 50% vertically
    const w = width  * 0.3;
    const h = height * 0.3;    

    context.beginPath();
    context.fillStyle = 'black';
    context.rect(x , y, w, h);
    context.fill();

  };
};

canvasSketch(sketch, settings);
