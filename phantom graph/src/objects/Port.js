window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Port = class
{
    constructor(node, options = {})
    {
        this.node = node;

        this.name = options.name || "Port";
        this.direction = options.direction || "input";
        this.side = options.side || (
            this.direction === "input" ? "left" : "right"
        );

        this.offset = options.offset ?? 0.5;
        this.type = options.type || "any";
    }

    get position()
    {
        const nodePosition = this.node.position;
        const nodeSize = this.node.size;

        switch (this.side) {
            case "left": return {
                x: nodePosition.x,
                y: nodePosition.y + nodeSize.height * this.offset
            };

            case "right": return {
                x: nodePosition.x + nodeSize.width,
                y: nodePosition.y + nodeSize.height * this.offset
            };

            case "top": return {
                x: nodePosition.x + nodeSize.width * this.offset,
                y: nodePosition.y
            };

            case "bottom": return {
                x: nodePosition.x + nodeSize.width * this.offset,
                y: nodePosition.y + nodeSize.height
            };

            default: return {
                x: nodePosition.x,
                y: nodePosition.y
            };
        }
    }
};