let arr = [-14, 23, 9, -4, 12, -1];
let min = arr[0];
for(let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}console.log('the smallest element is ' + min)
