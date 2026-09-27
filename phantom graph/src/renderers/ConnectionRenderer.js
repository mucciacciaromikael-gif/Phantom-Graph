window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.ConnectionRenderer = class
{
    constructor(renderer)
    {
        this.renderer = renderer;
    }

    render(connection, camera)
    {
        const ctx = this.renderer.ctx;

        // Convert connection endpoints from world to screen coordinates
        const start = camera.worldToScreen(
            connection.start.x,
            connection.start.y
        );

        const end = camera.worldToScreen(
            connection.end.x,
            connection.end.y
        );

        // console.log("Rendering connections:", {start, end, zoom: camera.zoom});

        // Calculate the Bezier curve control point offset
        const dx = Math.abs(end.x - start.x);
        const curve = Math.max(50, dx * 0.5);

        // Draw the connection curve
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);

        ctx.bezierCurveTo(
            start.x + curve, start.y,
            end.x - curve, end.y,
            end.x, end.y
        );

        ctx.strokeStyle = "#8b9bb4";
        ctx.lineWidth = 3 * camera.zoom;
        ctx.lineCap = "round";
        ctx.stroke();
    }
}