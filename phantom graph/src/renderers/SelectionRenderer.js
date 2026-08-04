window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.SelectionRenderer = class
{
    constructor(renderer)
    {
        this.renderer = renderer;
    }

    render(scene, camera)
    {
        const ctx = this.renderer.ctx;

        for (const object of scene.objects) {
            if (!object.selected) continue;

            const position = camera.worldToScreen(
                object.position.x,
                object.position.y
            );

            ctx.strokeStyle = "#5a8dff";
            ctx.lineWidth = 2;

            ctx.strokeRect(
                position.x - 4,
                position.y - 4,
                object.size.width * camera.zoom + 8,
                object.size.height * camera.zoom + 8
            );
        }
    }
};