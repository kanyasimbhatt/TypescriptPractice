function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.kind === "square") {
        return Math.pow(shape.side, 2);
    }
    return 2 * (shape.width * shape.height);
}
var all = {
    kind: "circle",
    radius: 10
};
var num = getArea(all);
