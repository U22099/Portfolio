import { useEffect } from "react";

export function BgAnim() {
  const initAnim = () => {
    const HtmlCanvas = document.getElementById('canvas');

    HtmlCanvas.width = innerWidth;
    HtmlCanvas.height = innerHeight;

    const canvas = HtmlCanvas.getContext('2d');

    window.addEventListener('resize', () => {
      init();
      HtmlCanvas.width = innerWidth;
      HtmlCanvas.height = innerHeight;
    });

    let array = [];
    let theme = localStorage.getItem("portfolio-ui-theme");
    if (theme === "system") {
      theme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches ?
        "dark" :
        "light"
    }
    let color = {
      particle: theme === "dark" ? "hsl(263.4 70% 50.4%)" : "hsl(262.1 83.3% 57.8%)",
      line: theme === "dark" ? "hsl(215 27.9% 16.9%)" : "hsl(220 14.3% 95.9%)"
    };

    console.log(color);

    function generateRandom(min, max) {
      const result = (Math.random() * (max - min) + min);

      return result;
    }

    function Circle(x, y, size, color, velocity) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.color = color;
      this.velocity = velocity;

      this.update = () => {
        if (this.x - this.size < 0 || this.x + this.size > innerWidth) {
          this.velocity.x = -this.velocity.x;
        } else if (this.y + this.size < 0 || this.y - this.size > innerHeight) {
          this.velocity.y = -this.velocity.y;
        }
        this.x += velocity.x;
        this.y += velocity.y;
        this.draw();
      }

      this.draw = () => {
        canvas.save();
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        canvas.fillStyle = this.color;
        canvas.fill();
        canvas.closePath();
        //canvas.restore();
      }
    }

    function init() {
      array = [];
      for (let k = 0; k < (innerWidth * innerHeight) / 1500; k++) {
        let size = generateRandom(1, 3);
        let x = generateRandom(size, innerWidth - size);
        let y = generateRandom(size, innerHeight - size);
        let velocity = {
          x: generateRandom(-1, 1),
          y: generateRandom(-1, 1),
        }
        let particle = new Circle(x, y, 2, color.particle, velocity)
        array.push(particle);
      }
    }

    function animation() {
      requestAnimationFrame(animation);

      //canvas.fillStyle = 'rgba(0, 0, 0, 0.07)';
      canvas.clearRect(0, 0, innerWidth, innerHeight);
      for (let x = 0; x < array.length; x++) {
        array[x].update();
      }
      connect();
    }

    function connect() {
      for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array.length; k++) {
          let dx = array[i].x - array[k].x;
          let dy = array[i].y - array[k].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 0 && distance < (innerWidth * innerHeight) / 8000) {
            canvas.strokeStyle = color.line;
            canvas.lineWidth = 1;
            canvas.moveTo(array[i].x, array[i].y);
            canvas.lineTo(array[k].x, array[k].y);
            canvas.stroke();
          }
        }
      }
    }
    init();
    animation();
  }

  useEffect(() => {
    initAnim();
  }, [document]);
  return (
    <canvas id="canvas" className="bg-background fixed top-0 left-0 w-full h-full -z-50"></canvas>
  )
}