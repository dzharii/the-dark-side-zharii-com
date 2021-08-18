import { Component, createRef, h } from 'preact';
import style from './style.css';

interface P { }

interface S { }

type Star = {
    x: number
    y: number
    z: number
    o: string
}

class Background extends Component<P, S> {

    canvasRef = createRef<HTMLCanvasElement>();

    public get canvas() : HTMLCanvasElement {
        if (!this.canvasRef.current) {
            throw new Error('Cannot find canvas element #space');
        }
        return this.canvasRef.current;
    }

    componentDidMount() {
        const componentThis = this;

        var c = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        if (!c) throw new Error('Unable to obtain context: canvas.getContext("2d")');

        var numStars = 1900;
        var radius = '0.' + Math.floor(Math.random() * 9) + 1;
        var focalLength = this.canvas.width * 2;
        var warp = 0;
        var centerX: number
        var centerY : number;

        var stars: Star[] = []
        var star: Star;
        var i: number;

        var animate = true;

        initializeStars();

        function executeFrame() {

            if (animate) {
                window.requestAnimationFrame(executeFrame);
            }
            moveStars();
            drawStars();
        }

        function initializeStars() {
            centerX = componentThis.canvas.width / 2;
            centerY = componentThis.canvas.height / 2;

            stars = [];
            for (i = 0; i < numStars; i++) {
                star = {
                    x: Math.random() * 1920,
                    y: Math.random() * 1080,
                    z: Math.random() * 1920,
                    o: '0.' + Math.floor(Math.random() * 99) + 1
                };
                stars.push(star);
            }
        }

        function moveStars() {
            for (i = 0; i < numStars; i++) {
                star = stars[i];
                star.z--;

                if (star.z <= 0) {
                    star.z = 1920;
                }
            }
        }

        function drawStars() {
            var pixelX, pixelY, pixelRadius;

            // Resize to the screen
            if (componentThis.canvas.width != window.innerWidth || componentThis.canvas.width != window.innerWidth) {
                componentThis.canvas.width = window.innerWidth;
                componentThis.canvas.height = window.innerHeight;
                initializeStars();
            }

            c.fillStyle = "rgba(0,0,0,1)";
            c.fillRect(0, 0, componentThis.canvas.width, componentThis.canvas.height);
            c.fillStyle = "rgba(0, 0, 0, " + radius + ")";
            for (i = 0; i < numStars; i++) {
                star = stars[i];

                pixelX = (star.x - centerX) * (focalLength / star.z);
                pixelX += centerX;
                pixelY = (star.y - centerY) * (focalLength / star.z);
                pixelY += centerY;
                pixelRadius = 1 * (focalLength / star.z);

                c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
                c.fillStyle = "rgba(255, 255, 255, " + star.o + ")";
                //c.fill();
            }
        }
        executeFrame();
    }


    render() {
        return <canvas id="space" class={style.space} ref={ this.canvasRef }/>
    }

};

export default Background;
