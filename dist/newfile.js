"use strict";
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    return (shape.width * shape.height);
}
getArea({ kind: 'circle', radius: 10, width: 10 });
