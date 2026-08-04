window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Transform2D = class
{
    constructor()
    {
        this.position = {x: 0, y: 0};
        this.rotation = 0;
        this.scale = {x: 1, y: 1};
    }

    translate(x, y)
    {
        this.position.x += x;
        this.position.y += y;
    }

    copy()
    {
        const transform = new PhantomGraph.Transform2D();

        transform.position.x = this.position.x;
        transform.position.y = this.position.y;

        transform.rotation = this.rotation;

        transform.scale.x = this.scale.x;
        transform.scale.y = this.scale.y;

        return transform;
    }
}