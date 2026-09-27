window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Renderer = class 
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        if (!this.ctx) {
            throw new Error("Failed to create 2D canvas context");
        }

        this.background = new PhantomGraph.BackgroundRenderer(this);
        this.grid = new PhantomGraph.GridRenderer(this);
        this.connection = new PhantomGraph.ConnectionRenderer(this);
        this.node = new PhantomGraph.NodeRenderer(this);
        this.selectionRenderer = new PhantomGraph.SelectionRenderer(this);

        // disable smoothing
        this.ctx.imageSmoothingEnabled = false;

        // default background color
        this.clearColor = "#1e1e1e";
    }

    resize()
    {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    render(scene, camera)
    {
        this.background.render();
        this.grid.render(camera);

        // Render visible connections behing nodes
        const connections = scene.getVisibleConnections();

        for (const connection of connections) {
            this.connection.render(connection, camera);
        }

        // Render visible scene object
        const objects = scene.getVisibleObject();

        for (const object of objects) {
            if (object instanceof PhantomGraph.Node) {
                this.node.render(object, camera);
            }
        }

        // Render selection overlays above scene objects
        this.selectionRenderer.render(scene, camera);
    }
};