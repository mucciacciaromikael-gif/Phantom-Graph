window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Camera = class
{
    constructor()
    {
        this.transform = new PhantomGraph.Transform2D();
        this.zoom = 1;
    }

    get x()         { return this.transform.position.x; }
    get y()         { return this.transform.position.y; }

    set x(value)    { this.transform.position.x = value; }
    set y(value)    { this.transform.position.y = value; }

    worldToScreen(x, y)
    {
        return {
            x: (x - this.x) * this.zoom,
            y: (y - this.y) * this.zoom
        };
    }

    screenToWorld(x, y)
    {
        return {
            x: x / this.zoom + this.x,
            y: y / this.zoom + this.y
        };
    }

    zoomAt(x, y, amount)
    {
        const before = this.screenToWorld(x, y);

        this.zoom += amount;

        // Limites
        this.zoom = Math.max(0.1, Math.min(this.zoom, 5));

        const after = this.screenToWorld(x, y);

        this.x += before.x - after.x;
        this.y += before.y - after.y;
    }
}