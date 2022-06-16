(() => {
    Array.prototype.redu = function(func, init) {

        let result;
        let count;
        if (init) {
            result = init;
            count = 0;
        } else {
            result = this[0];
            count = 1
        }
        for (let i = count; i < this.length; i++) {
            result = func(result, this[i])
        }

        return result
    }
    console.log([1, 2, 2, 3, 4, 4].redu(((x, y) => {
        if (!x[y]) {
            console.log(`${y} not exists, so = 0`);
            x[y] = 0;
        }
        console.log(`${y} exists, so ${x[y]} ++`);
        x[y] += 1;


        return x;
    }), {}));

})()