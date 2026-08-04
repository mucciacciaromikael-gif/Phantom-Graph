window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.InputManager = class
{
    constructor(canvas)
    {
        this.mouse = new PhantomGraph.Mouse(canvas);
    }

    update()
    {
        this.mouse.update();
    }
};