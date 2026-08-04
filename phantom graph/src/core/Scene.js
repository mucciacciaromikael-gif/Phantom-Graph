window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Scene = class
{
    constructor()
    {
        this.objects = [];
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
    }

    getVisibleObject()
    {
        return this.objects.filter(
            object => object.visible
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