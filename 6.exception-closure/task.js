function parseCount(value) {
    let parc = Number.parseInt(value);
    if(isNaN(parc) === true) {
        const invalidError = new Error("Невалидное значение");
        throw invalidError;
    } else return parc
};
function validateCount(value) {
    try {
        return parseCount(value);
    } catch(e) {
        return new Error("Невалидное значение");
    };
};
class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if((this.a + this.b < this.c) || (this.a + this.c < this.b) || (this.c + this.b < this.a)) {
            const triangleError = new Error("Треугольник с такими сторонами не существует");
            throw triangleError;
        };
    };
    getPerimeter() {
        let per = this.a + this.b + this.c;
        return per;
    };
    getArea() {
        let p = (this.a + this.b + this.c)/2;
        let s = +((Math.sqrt(p * (p - this.a) * (p -this.b) * (p-this.c))).toFixed(3));
        return s 
    };
};
function getTriangle(a,b,c) {
    try {
        return new Triangle(a,b,c);     
    } catch (e) {
        return {getPerimeter: (() => new Error("Невалидное значение")), getArea: (() => new Error("Невалидное значение"))}       
    };
};
