window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Scene = class
{
    constructor()
    {
        this.objects = [];
        this.connections = [];
    }

    add(object)
    {
        this.objects.push(object);
    }

    remove(object)
    {
        const index = this.objects.indexOf(object);

        if (index !== -1) {
            this.objects.splice(index, 1);
        }

        // remove the connections too
        this.connections = this.connections.filter(
            connections =>
                connections.output.node !== object &&
                connections.input.node !== object
        );
    }

    addConnection(connection)
    {
        this.connections.push(connection);
    }

    removeConnection(connection) 
    {
        const index = this.connections.indexOf(connection);

        if (index !== -1) {
            this.connections.splice(index, 1);
        }
    }

    getVisibleObject()
    {
        return this.objects.filter(
            object => object.visible
        );
    }

    getVisibleConnections()
    {
        return (this.connections || []).filter(
            connection =>
                connection.output.node.visible &&
                connection.input.node.visible
        );
    }

    findObjectAt(x, y)
    {
        for (let i = this.objects.length - 1; i >= 0; i--) {
            const object = this.objects[i];

            if (object.containsPoint &&
                object.containsPoint(x, y)) {
                    return object;
                }
        }
        return null;
    }
};