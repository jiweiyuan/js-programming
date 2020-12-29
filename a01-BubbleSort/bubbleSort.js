/* BubbleSort 冒泡排序 */
const ary = [1, 23, 55, 33, 25, 16, 78, 6, 45, 24]

function bubbleSort(originalArray) {
    let result = [...originalArray]
    for(let i=0, len= result.length; i<len; i++) {
        let swapped = false
        for(let j=0; j<len-i-1; j++) {
            if(result[j]>result[j+1]) {
                let temp = result[j]
                result[j] = result[j+1]
                result[j+1] = temp
                swapped = true
            }
        }
        if(!swapped) {
            return result
        }
    }
    return result
}

console.log(ary)
console.log(bubbleSort(ary))
