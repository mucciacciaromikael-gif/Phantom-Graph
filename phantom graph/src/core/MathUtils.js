window.PhantomGraph = window.PhantomGraph || {};

PhantomGraph.MathUtils = 
{
    // Limits a value between a minimum and a maximum
    clamp(value, min, max)
    {
        return Math.max(min, Math.min(max, value));
    },

    // Linear interpolation
    lerp(a, b, t)
    {
        return a + (b - a) * t;
    },

    // Distance between two points
    distance(a, b)
    {
        return Math.hypot(
            b.x - a.x,
            b.y - a.y
        );
    },

    // Aligns a value to a multiple on the grid
    snap(value, size)
    {
        return Math.round(value / size) * size;
    }
}