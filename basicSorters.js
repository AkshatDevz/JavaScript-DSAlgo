function swapperZ(array, ind1, ind2) {
    var temp = array[ind1];
    array[ind1] = array[ind2];
    array[ind2] = temp;

    return array;
}

function bubbleSorter(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var noSwaps = true;
        for (var j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //                 swapperZ(arr, j, j + 1);

                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                var noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return arr;
}

function selectionSorter(arr) {
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            swapperZ(arr, lowest, i);
        }
    }
    return arr;
}

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var temp = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
                arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}
// bubbleSorter([4, 5, 9, 3, 8, 2]);
// selectionSorter([4, 5, 9, 3, 8, 22]);
insertionSort([4, 5, 9, 3, 8, 2]);
