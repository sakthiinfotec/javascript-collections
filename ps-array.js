
/* 1. Flattern the nested array */
const arr = [2, [4], [[[5]]], [[[[[6]]]]], [7]]

const flattern = (arr, result = []) => {
    for (const el of arr) {
        if(Array.isArray(el)) {
            flattern(el, result)
        } else {
            result.push(el)
        }
    }
}

const result = []
flattern(arr, result)
console.log(result)

