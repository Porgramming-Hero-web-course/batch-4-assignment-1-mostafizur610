"use strict";
function calculateShapeArea(shape) {
    switch (shape.shape) {
        case "circle":
            var areaCircle = parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
            return areaCircle;
        case "rectangle":
            return shape.width * shape.height;
        default:
            throw new Error("Unexpected shape type");
    }
}
