import React, { useEffect, useRef } from "react";

const Matrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const ACTIVE_DROPS_COUNT = 100;
    const FONT_SIZE = 14;
    const TRAIL_LENGTH = 20;
    const DROP_SPEED = 35;

    const alphabet =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン01";
    let columns = 0;

    class Drop {
      constructor() {
        this.reset();
        this.history = [];
      }

      reset() {
        this.x = Math.floor(Math.random() * columns);
        this.y = Math.floor(Math.random() * -canvas.height);
      }

      update() {
        const char = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        this.history.unshift({ char, x: this.x, y: this.y });
        if (this.history.length > TRAIL_LENGTH) {
          this.history.pop();
        }

        this.y++;

        if (this.y * FONT_SIZE > canvas.height + TRAIL_LENGTH * FONT_SIZE) {
          this.reset();
          this.history = [];
        }
      }

      draw(context) {
        for (let i = 0; i < this.history.length; i++) {
          const { char, x, y } = this.history[i];

          const opacity = 1 - i / this.history.length;

          const color = i === 0 ? "#cceeff" : "#00bffa";

          context.fillStyle = `rgba(${
            i === 0 ? "204, 238, 255" : "0, 191, 250"
          }, ${opacity})`;
          context.fillText(char, x * FONT_SIZE, y * FONT_SIZE);
        }
      }
    }

    let rainDrops = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / FONT_SIZE);
      ctx.font = `${FONT_SIZE}px monospace`;

      rainDrops = [];
      for (let i = 0; i < ACTIVE_DROPS_COUNT; i++) {
        rainDrops.push(new Drop());
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      rainDrops.forEach((drop) => {
        drop.update();
        drop.draw(ctx);
      });
    };

    setup();
    const interval = setInterval(draw, DROP_SPEED);

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default Matrix;
