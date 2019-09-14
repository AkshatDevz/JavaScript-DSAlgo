function areThereDups() {
    return new Set(arguments).size !== arguments.length;
}

areThereDups(1, 2, 3, 4);

//set is method that "uniquises" every element of the argument, or rather removes the duplicate elememts
//size on the otehr hand is used just to find the size of the object SET 
