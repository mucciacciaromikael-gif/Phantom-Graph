window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.GridRenderer = class
{
    constructor(renderer)
    {
        this.renderer = renderer;

        // Distance entre deux lignes secondaires
        this.gridSize = 25;

        // Une ligne principale toutes les 5 lignes
        this.majorLineEvery = 5;

        // Couleurs
        this.minorColor = "#3a3a3a";
        this.majorColor = "#383838";
        this.originColor = "#5a8dff";
    }

    render(camera)
    {
       // console.log(camera.x, camera.y);
       const ctx = this.renderer.ctx;
       const canvas = this.renderer.canvas;

       const start = camera.screenToWorld(0, 0);
       const end = camera.screenToWorld(
            canvas.width,
            canvas.height
       );

       const startX = Math.floor(start.x / this.gridSize) * this.gridSize;
       const startY = Math.floor(start.y / this.gridSize) * this.gridSize;

       for (let x = startX; x < end.x; x += this.gridSize) {
            const screen = camera.worldToScreen(x, 0);

            ctx.beginPath();
            ctx.strokeStyle = 
                x % (this.gridSize * 5) === 0
                    ? this.majorColor
                    : this.minorColor;
            ctx.moveTo(screen.x, 0);
            ctx.lineTo(screen.x, canvas.height);
            ctx.stroke();
       }

       for (let y = startY; y < end.y; y += this.gridSize) {
            const screen = camera.worldToScreen(0, y);

            ctx.beginPath();
            ctx.strokeStyle = 
                y % (this.gridSize * 5) === 0
                    ? this.majorColor
                    : this.minorColor;
            ctx.moveTo(0, screen.y);
            ctx.lineTo(canvas.width, screen.y);
            ctx.stroke();
       }

       // Axe X = 0
       const originX = camera.worldToScreen(0, 0);

       ctx.strokeStyle = this.originColor;
       ctx.moveTo(originX.x, 0);
       ctx.lineTo(originX.x, canvas.height);
       ctx.stroke();

       // Axe Y = 0
       ctx.beginPath();
       ctx.moveTo(0, originX.y);
       ctx.lineTo(canvas.width, originX.y)
    }
}