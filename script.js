(() => {
    Array.prototype.goo = function(func) {
        const initialArr = this;
        const resultArr = [];
        for (a of initialArr) {
            resultArr.push(func(a));
        }
        console.log(`this is ${resultArr}`);
        return resultArr;
    }


    /*  console.log([1, 2, 3].goo(x => 2 * x));
     */
})()