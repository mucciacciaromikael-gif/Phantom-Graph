window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.Connection = class
{
    constructor(output, input) 
    {
        this.output = output;
        this.input = input;
    }

    get start()
    {
        return this.output.position;
    }

    get end()
    {
        return this.input.position;
    }
};