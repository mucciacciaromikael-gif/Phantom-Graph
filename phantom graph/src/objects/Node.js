window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Node = class extends PhantomGraph.GraphObject
{
    constructor() {
        // console.log(node);
        super();

        this.title = "Node";

        this.size = {
            width: 200,
            height: 120
        };

        this.titleHeight = 30;

        this.inputs = [];
        this.outputs = [];

        this.properties = {};

        this.style = {};
    }

    containsPoint(x, y)
    {
        return (
            x >= this.position.x &&
            x <= this.position.x + this.size.width &&
            y >= this.position.y &&
            y <= this.position.y + this.size.height
        );
    }
}