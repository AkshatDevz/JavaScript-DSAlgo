function naiveSearch(str1, str2) {
    var count = 0;
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            console.log(str2[j], str1[i + j]);
            if (str2[j] !== str1[i + j]) {
                console.log("break!");
                break;
            }
            if (j === str2.length - 1) {
                count++;
                console.log("found this !!");
            }
        }
    }
    return count;
}

naiveSearch("wowzomgwowyyy lmaomgfthis", "omg");
