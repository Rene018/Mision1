let arr = [1, 1, 1, 2, 3, 3, 3, 3, 3,1]
let arr2 = arr
let arr3 = []
for (let index = 0; index < arr.length; index++) {

    if (!(arr3.includes(arr[index]))) {
        let aaa = new Array
        for (let j = 0; j < arr2.length; j++) {
            const element = arr2[j];
            if (arr[index] == element) {
                aaa.push(element)
            }
        }
        arr3.push(aaa)
        arr.splice(index, 0)
    }


}
console.log(arr3);