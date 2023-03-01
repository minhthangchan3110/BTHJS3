function maxArrNumber(numbers){
    if (!numbers || !numbers.length) return "Lỗi"
    var max = numbers[0];
    for (var i = 0; i<numbers.length; i++){
        if (max<=numbers[i]){
            max = numbers[i]
        }
    }
    return max
}
console.log(maxArrNumber([1,2,3,4,5]))
