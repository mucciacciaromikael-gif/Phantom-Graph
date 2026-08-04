window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.NodeRenderer = class
{
    constructor(renderer)
    {
        this.renderer = renderer;
    }

    render(node, camera)
    {
        const ctx = this.renderer.ctx;
        const position = camera.worldToScreen(
            node.position.x,
            node.position.y
        );

        ctx.fillStyle = "#444444";

        const size = node.size;

        const zoomedWidth = size.width * camera.zoom;
        const zoomedHeight = size.height * camera.zoom;

        ctx.fillRect(
            position.x,
            position.y,
            zoomedWidth,
            zoomedHeight
        );

        ctx.fillStyle = "#555555";
        ctx.fillRect(
            position.x,
            position.y,
            zoomedWidth,
            node.titleHeight * camera.zoom
        );

        ctx.fillStyle = "white";
        ctx.font = `${14 * camera.zoom}px Arial`;
        ctx.fillText(
            node.title,
            position.x + (10 * camera.zoom),
            position.y + (20 * camera.zoom)
        );
    }
};