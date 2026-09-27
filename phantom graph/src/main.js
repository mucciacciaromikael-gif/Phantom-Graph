window.onload = () =>
{
    const canvas = document.getElementById("viewport");
    const engine = new PhantomGraph.Engine("viewport");

    engine.start();

    const testNode = new PhantomGraph.Node();
    testNode.title = "Test";
    testNode.position.x = 300;
    testNode.position.y = 200;

    engine.scene.add(testNode);

    const secondNode = new PhantomGraph.Node();
    secondNode.title = "Second Node";
    secondNode.position.x = 600;
    secondNode.position.y = 300;

    engine.scene.add(secondNode);

    // test ports
    const output = testNode.addOutput({
        name: "Output",
        side: "right",
        offset: 0.5,
        type: "number"
    });

    const input = secondNode.addInput({
        name: "Input",
        side: "left",
        offset: 0.5,
        type: "number"
    });

    // connecting the ports
    const connection = new PhantomGraph.Connection(output, input);
    engine.scene.addConnection(connection);

    // DEBUGING TOOLS
    // console.log("Output ports:", testNode.outputs);
    // console.log("Input ports:", secondNode.inputs);
    // console.log("Connections:", engine.scene.connections);
    // console.log("TEST NODE :", testNode);
    // console.log("TEST TRANSFORM :", testNode.transform);
    // console.log("SIZE : ", testNode.size);
    // console.log("POSITION : ", testNode.position);
    // console.log(node.transform);
    // console.log(node.position);
};