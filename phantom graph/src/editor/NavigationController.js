window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.NavigationController = class extends PhantomGraph.Controller
{
    constructor(engine)
    {
        super(engine);
    }

    update()
    {
        const mouse = this.engine.input.mouse;
        const camera = this.engine.camera;

        // pan
        if (mouse.middle) {
            camera.x -= mouse.delta.x / camera.zoom;
            camera.y -= mouse.delta.y / camera.zoom;
        }

        // zoom
        if (mouse.wheel !== 0) {
            const amount = mouse.wheel > 0 ? -0.1 : 0.1;

            camera.zoomAt(
                mouse.position.x,
                mouse.position.y,
                amount
            );
        }
    }
}