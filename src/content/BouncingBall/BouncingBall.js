import React, { useRef, useEffect } from 'react';

const Canvas = props => {
  //const { draw, ...rest } = props
  const canvasRef = useRef(null);

  var dx = 1;
  var dy = -1;
  var ballRadius = 7;

  const draw = (ctx, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#0f62fe'; //"#0095DD";
    ctx.fill();
    ctx.closePath();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 200;
    canvas.height = 150;
    var ctx = canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height - 30;

    //let frameCount = 1
    let animationFrameId;

    //Our draw came here
    const render = () => {
      //frameCount++
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
      }
      x += dx;
      y += dy;

      draw(ctx, x, y);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
