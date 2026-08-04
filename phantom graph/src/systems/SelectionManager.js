window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.SelectionManager = class
{
    constructor(engine)
    {
        this.engine = engine;
        this.selected = [];
    }

    select(object)
    {
        this.clear();
        object.selected = true;
        this.selected.push(object);
    }

    clear()
    {
        for (const object of this.selected) {
            object.selected = false;
        }
        this.selected = [];
    }
}