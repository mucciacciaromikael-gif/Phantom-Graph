window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Engine = class
{
    constructor(canvasId) 
    {
        // Canvas principal
        this.canvas = document.getElementById(canvasId);

        if (!this.canvas) {
            throw new Error(`Canvas "${canvasId}" introuvalble`);
        }

        // Modules du moteur
        this.renderer = new PhantomGraph.Renderer(this.canvas);
        this.camera = new PhantomGraph.Camera();
        this.scene = new PhantomGraph.Scene();
        this.input = new PhantomGraph.InputManager(this.canvas);
        this.selection = new PhantomGraph.SelectionManager(this);
        this.drag = new PhantomGraph.DragManager(this);
        this.editor = new PhantomGraph.EditorController(this);
        

        // État du moteur
        this.running = false;

        // Lier les méthodes
        this.loop = this.loop.bind(this);
        this.resize = this.resize.bind(this);
    }

    start()
    {
        // console.log("yep");
        if (this.running) return;

        this.running = true;
        this.resize();

        window.addEventListener("resize", this.resize);
        requestAnimationFrame(this.loop);
    }

    stop()
    {
        this.running = false;
        window.removeEventListener("resize", this.resize);
    }

    loop()
    {
        // console.log("yep");
        if (!this.running) return;

        try {
            this.update();
            this.render();
            this.input.update();
        } catch(error) {
            console.error("Erreur dans Engine.loop :", error);
        }

        requestAnimationFrame(this.loop);
    }

    update() 
    {
        this.editor.update();
        this.input.update();
        this.editor.update();
    }

    render() 
    {
        // console.log("Engine.render()");
        this.renderer.render(this.scene, this.camera);
    }

    resize()
    {
        this.renderer.resize();
    }
}