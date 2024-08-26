array = [5,2,515,23,6,3,12]

let max = array[0];

for (let i = 1; i < array.length; i++){
    if(array[i] >= max ){
        max = array[i];
    }
}
console.log(max);