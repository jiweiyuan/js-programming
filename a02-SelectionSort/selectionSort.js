/* Selection Sort 选择排序 */

const ary = [1, 23, 55, 33, 25, 16, 78, 6, 45, 24]

function selectionSort(originalArray) {
    let result = [...originalArray]

    for(let i=0, len=result.length; i<len; i++) {
        let minIndex = i;
        for(let j=i+1; j<len; j++) {
            if(result[j] < result[minIndex]) {
                minIndex = j
            }
        }

        if(minIndex !== i) {
            [result[minIndex], result[i]] = [result[i], result[minIndex]]
        }
    }

    return result
}

console.log(ary)
console.log(selectionSort(ary))
