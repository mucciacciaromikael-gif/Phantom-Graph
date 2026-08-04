window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Renderer = class 
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        if (!this.ctx) {
            throw new Error("Impossible de créer le contexte 2D");
        }

        this.background = new PhantomGraph.BackgroundRenderer(this);
        this.grid = new PhantomGraph.GridRenderer(this);
        this.node = new PhantomGraph.NodeRenderer(this);
        this.selectionRenderer = new PhantomGraph.SelectionRenderer(this);

        // Désactive le lissage
        this.ctx.imageSmoothingEnabled = false;

        // Couleur de fond par défaut
        this.clearColor = "#1e1e1e";
    }

    resize()
    {
        // Taille réelle du canvas
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    render(scene, camera)
    {
        this.background.render();
        this.grid.render(camera);

        const objects = scene.getVisibleObject();

        for (const object of objects) {
            if (object instanceof PhantomGraph.Node) {
                this.node.render(object, camera);
            }
        }

        this.selectionRenderer.render(scene, camera);
    }
};