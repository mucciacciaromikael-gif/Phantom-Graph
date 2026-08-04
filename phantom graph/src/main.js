window.onload = () =>
{
    const canvas = document.getElementById("viewport");

    const engine = new PhantomGraph.Engine("viewport");

    engine.start();

    const testNode = new PhantomGraph.Node();

    // console.log("TEST NODE :", testNode);
    // console.log("TEST TRANSFORM :", testNode.transform);

    testNode.title = "Test";

    testNode.position.x = 300;
    testNode.position.y = 200;

    engine.scene.add(testNode);

    console.log("SIZE : ", testNode.size);
    console.log("POSITION : ", testNode.position);

    // console.log(node.transform);
    // console.log(node.position);
};