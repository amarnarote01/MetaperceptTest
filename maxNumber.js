
// Find the maximum number in a jagged array of numbers or array of numbers.
// Input: [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]

function findMaxNumber(arr) {
    let max = 0;

    arr.forEach(element => {
        if(Array.isArray(element)) {
            const maxInSub = findMaxNumber(element);
            if(max < maxInSub) {
                max = maxInSub;
            }
        }
        else {
            if(max < element) {
                max = element;
            }
        }
    });
    return max;
}


const input = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
const result = findMaxNumber(input);
console.log(result);