window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.EditorController = class
{
    constructor(engine)
    {
        this.engine = engine;
        this.navigation = new PhantomGraph.NavigationController(engine);
    }

    update()
    {
        this.navigation.update();
    }
}