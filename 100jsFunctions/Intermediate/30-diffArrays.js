//30.diffArrays
const diffArrays = (numbers1, numbers2) => {
    const res = [];
    numbers1.map((num1) => {
        if (!numbers2.includes(num1)) {
            res.push(num1)
        }
    });
    numbers2.map((num2) => {
        if (!numbers1.includes(num2)) {
            res.push(num2)
        }
    })
    return res;
}
// Example usage:
console.log(
    diffArrays(
        [11, 96, 103, -5, 0, 12, 1],
        [0, 1, 2, 3, 4, 5]
    )
); // [11, 96, 103, -5, 12, 2, 3, 4, 5]




