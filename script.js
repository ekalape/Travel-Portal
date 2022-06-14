(() => {
    class Cube {
        length;

        constructor(length) {
                this.length = length;
            }
            //sa = 6*(a*a)
            //v = a*a*a
        get volume() {
            return Math.pow(this.length, 3);
        }
        get surfaceArea() {
            return 6 * Math.pow(this.length, 2);
        }
        set volume(value) {
            this.length = Math.cbrt(value);

        }
        set surfaceArea(value) {
            this.length = Math.sqrt(value / 6);
        }
    }

    let c = new Cube(2);
    c.surfaceArea = 12
    console.log(c.length);

})()