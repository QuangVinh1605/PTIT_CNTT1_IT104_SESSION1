function insertArr(arr1, arr2, index){
    if (index < 0 || index > arr1.length) {
        console.log("vi tri trn khon ghop le");
        return;
    } 
    const newArr =
        [
            ...arr1.slice(0, index),
            ...arr2,
            ...arr1.slice(index, arr1.length)
            
        ];
    return newArr;
}

 const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9]; 
console.log(insertArr(arr1, arr2, 2));


