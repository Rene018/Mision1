let arr = [1, 1, 1, 2, 3, 3, 3, 3, 3, 1, 1]
let arr2 = arr

console.log(arr3);
function rows(params) {
    let arr3 = {}
    arr.forEach(element => {
        arr3[element] = (arr3[element] || 0) + 1
    });
}