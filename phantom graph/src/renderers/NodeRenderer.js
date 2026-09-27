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

        const size = node.size;

        const zoomedWidth = size.width * camera.zoom;
        const zoomedHeight = size.height * camera.zoom;

        // Draw node body
        ctx.fillStyle = "#444444";
        ctx.fillRect(
            position.x,
            position.y,
            zoomedWidth,
            zoomedHeight
        );

        // Draw node title bar
        ctx.fillStyle = "#555555";
        ctx.fillRect(
            position.x,
            position.y,
            zoomedWidth,
            node.titleHeight * camera.zoom
        );

        // Draw node title
        ctx.fillStyle = "white";
        ctx.font = `${14 * camera.zoom}px Arial`;
        ctx.fillText(
            node.title,
            position.x + (10 * camera.zoom),
            position.y + (20 * camera.zoom)
        );

        // Draw input and output ports
        for (const port of node.inputs) {
            this.renderPort(port, camera);
        }

        for (const port of node.outputs) {
            this.renderPort(port, camera);
        }
    }

    renderPort(port, camera) 
    {
        const ctx = this.renderer.ctx;
        const worldPosition = port.position;

        const position = camera.worldToScreen(
            worldPosition.x,
            worldPosition.y
        );

        // console.log("Renderering port:", port.name, port.direction, worldPosition);

        const radius = 6 * camera.zoom;

        // Choose port color based on direction
        ctx.fillStyle = port.direction === "input"
            ? "#5c7"
            : "#59f";

        // Draw port circle
        ctx.beginPath();
        ctx.arc(
            position.x, position.y,
            radius, 0, Math.PI * 2
        );
        ctx.fill();

        // Draw port outline
        ctx.strokeStyle = "#222";
        ctx.lineWidth = 1.5 * camera.zoom;
        ctx.stroke();
    }
};