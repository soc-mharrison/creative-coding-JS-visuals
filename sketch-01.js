const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

// setup variables - use const for values that won't change
      const w = 60;
      const h = 60;
      const gap = 20;
      let x, y;     // use let for x, y because position will change

// for loop with values stored in variables with a nested loop
      for (let i = 0; i < 5; i++) {
        // start nested loop for columns
        for (let j = 0; j < 5; j++) {
          // update x y to place along x axis
          x = 100 + (w + gap) * i;
          // update y to automatically make grid
          y = 100 + (h + gap) * j;

          context.beginPath();
          context.rect(x , y, w, h);
          context.stroke();

          // Use IF to only show grid of smaller boxes in columns based on a coin toss of 50% (Math.random() picks a no. from 0-1)
          if (Math.random() > 0.5){
            context.beginPath();
            context.rect(x + 8, y + 8, w -16, h - 16);
            context.stroke();
          }
        } //end nested loop   
      }


  };
};

canvasSketch(sketch, settings);
