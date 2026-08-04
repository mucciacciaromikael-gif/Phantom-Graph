window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Mouse = class
{
    constructor(target)
    {
        this.position = {x: 0, y: 0};
        this.delta = {x: 0, y: 0};
        this.wheel = 0;
        this.left = false;
        this.middle = false;
        this.right = false;
        this.leftPressed = false;
        this.leftReleased = false;

        target.addEventListener("mousemove", (event) => {
            const newX = event.clientX;
            const newY = event.clientY;

            this.delta.x += newX - this.position.x;
            this.delta.y += newY - this.position.y;

            this.position.x = newX;
            this.position.y = newY;
        });

        target.addEventListener("mousedown", (event) =>{
            switch (event.button) {
                case 0: 
                    if (!this.left) this.leftPressed = true;
                    this.left = true; 
                    break;
                case 1: this.middle = true; break;
                case 2: this.right  = true; break;
            }
        });

        window.addEventListener("mouseup", (event) => {
            switch (event.button) {
                case 0:
                    this.left = false;
                    this.leftReleased = true;
                    break;
                case 1: this.middle = false; break;
                case 2: this.right  = false; break;
            }
        });

        target.addEventListener("wheel", (event) => {
            this.wheel += event.deltaY;
        });
    }

    update()
    {
        this.delta.x = 0;
        this.delta.y = 0;

        this.wheel = 0;

        this.leftPressed = false;
        this.leftReleased = false; 
    }
};