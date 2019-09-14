function swapEm(array, index1, index2){
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

function bubbleSort(arr){
    for(var i = arr.length-1; i>=0; i--){
        for(var j = 0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                swapEm(arr,j,j+1);
            }
        }
    }
    return arr;
}

bubbleSort([4,5,3,2,8,9]);