class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get area() {
        return this.radius ** 2 * Math.PI
    }

    set area(newArea) {
        this.radius = (newArea/Math.PI) ** (1/2)
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    get circumference() {
        return this.radius * 2 * Math.PI
    }

    set circumference(newCircumference) {
        this.radius = newCircumference/(2 * Math.PI)
    }
}