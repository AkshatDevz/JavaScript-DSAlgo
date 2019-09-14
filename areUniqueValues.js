function areUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    var i = 0;

    //     j<arr.length    j++
    for (var j = 1; j < arr.length; j++) {
        //     if arr[i] equal to arr[j]    then j++

                 //redundant

        //     else if arr[i] is not equal to arr[j]   then arr[i] = arr[j] and i++
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
        return i + 1;
    }
}

areUniqueValues([1, 1, 1, 2, 2, 3, 3, 3, 4, 2, 2, 1]);
