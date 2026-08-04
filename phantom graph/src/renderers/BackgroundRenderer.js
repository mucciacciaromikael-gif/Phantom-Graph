window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.BackgroundRenderer = class
{
    constructor(renderer)
    {
        this.renderer = renderer;
        this.color = "#1e1e1e";
    }

    render()
    {
        const ctx = this.renderer.ctx;
        const canvas = this.renderer.canvas;

        ctx.fillStyle = this.color;
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
}