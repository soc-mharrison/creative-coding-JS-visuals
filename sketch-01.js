const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01; // responsive line width

// responsive variables - use const for values that won't change
      const w   = width  * 0.10;
      const h   = height * 0.10;
      const gap = width  * 0.03;
      const ix  = width  * 0.17;  // initial x
      const iy  = width  * 0.17;  // initial y

      const off  = width  * 0.17;  // responsive offset

      let x, y;     // use let for x, y because position will change

// for loop with values stored in variables with a nested loop
      for (let i = 0; i < 5; i++) {
        // start nested loop for columns
        for (let j = 0; j < 5; j++) {
          // update x y to initial x & y (ix and iy) to place responsively
          x = ix + (w + gap) * i;
          // update y to automatically make grid
          y = iy + (h + gap) * j;

          context.beginPath();
          context.rect(x , y, w, h);
          context.strokeStyle = 'white';
          context.stroke();

          // Use IF to only show grid of smaller boxes in columns based on a coin toss of 50% (Math.random() picks a no. from 0-1)
          if (Math.random() > 0.5){
            context.beginPath();
            // responsive offset
            context.rect(x + off / 2, y + off / 2, w -off, h - off); 
            context.strokeStyle = 'white';

            context.stroke(); 
          }
        } //end nested loop   
      }


  };
};

canvasSketch(sketch, settings);
