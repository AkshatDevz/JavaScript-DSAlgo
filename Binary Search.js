function binary(arr, val) {

    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while (arr[middle] != val && start < end) {
        if (val < arr[middle])
            end = middle - 1;
        else
            start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === val) {
        return middle + 1;
    }

    return -1;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 90]
  , toFind = 7;

binary(array, toFind);
