function calculateShapeArea(shape: Shape): number {
    switch (shape.shape) {
        case "circle":
            const areaCircle = parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
            return areaCircle;
        case "rectangle":
            return shape.width * shape.height;
        default:
            throw new Error("Unexpected shape type");
    }
}

type Shape = Circle | Rectangle;

interface Circle {
    shape: "circle";
    radius: number;
}

interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
}

