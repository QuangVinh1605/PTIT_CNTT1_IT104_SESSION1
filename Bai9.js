function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[result.length] = arr1[i];
            i = i + 1;
        } else {
            result[result.length] = arr2[j];
            j = j + 1;
        }
    }

    while (i < arr1.length) {
        result[result.length] = arr1[i];
        i++;
    }

    while (j < arr2.length) {
        result[result.length] = arr2[j];
        j++;
    }

    return result;
}

let first = [1, 4, 6];
let second = [2, 3, 5];
let finalMergedThing = mergeArrays(first, second);
console.log("Merged result is:", finalMergedThing);
