function checkChars(str1, str2) {
    var i = 0;

    for (let j = 0; j < str2.length; j++) {
        if (str2[j] === str1[i])
            i++;

        if (i === str1.length)
            return true;
    }
    return false;
}

checkChars("akshat", "akshataggarwal");
