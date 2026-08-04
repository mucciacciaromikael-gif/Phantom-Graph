window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.DragManager = class
{
    constructor(engine)
    {
        this.engine = engine;
        
        this.dragging = false;
        this.target = null;

        this.offset = { x: 0, y: 0 };
    }

    start(object, mouseWorld)
    {
        this.dragging = true;
        this.target = object;

        this.offset.x = mouseWorld.x - object.position.x;
        this.offset.y = mouseWorld.y - object.position.y;
    }

    update(mouseWorld)
    {
        if (!this.dragging || !this.target) return;

        this.target.position.x = mouseWorld.x - this.offset.x;
        this.target.position.y = mouseWorld.y - this.offset.y;
    }

    stop()
    {
        this.dragging = false;
        this.target = null;
    }
};