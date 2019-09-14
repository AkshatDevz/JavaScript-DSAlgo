function swapper(array, ind1, ind2) {
    var temp = array[ind1];
    array[ind1] = array[ind2];
    array[ind2] = temp;

    return array;
}

function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i != lowest) {
            swapper(arr, lowest, i);
        }
    }
    return arr;
}

selectionSort([19, 44, 38, 5, 47, 15]);
