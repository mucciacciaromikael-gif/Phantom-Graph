window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.GraphObject = class
{
    constructor()
    {
        // console.log("allo");
        this.transform = new PhantomGraph.Transform2D();
        this.selected = false;
        this.id = crypto.randomUUID();

        // temporaire
        this.visible = true;
    }

    get position()
    {
        return this.transform.position;
    }

    set position(value)
    {
        this.transform.position.x = value.x;
        this.transform.position.y = value.y;
    }
}