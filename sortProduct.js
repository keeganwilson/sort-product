const sortProduct = arr => {
    const unsorted = [];
    for (let i = 0; i < arr.length; i++) {
        unsorted.push(arr[i] * (i + 1))
    }
    const sorted = [...unsorted]
    sorted.sort((a, b) => a - b)

    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(sorted[i] / (unsorted.indexOf(sorted[i]) + 1))
    }   return output
}

console.log(sortProduct([23, 2, 3, 4, 5]))