function smallestInArray(array){
    let smallest = array[0];
    for(let number of array){
        if(number < smallest){
            smallest = number;
        }
    }
    return smallest;

}

module.exports = smallestInArray;