const arr = new Array(100).fill(0);

console.log(arr);

const array = arr.map((_, index) => index);

console.log(array);

const loccacso = array.filter(num => num % 5);

const tinhtong = loccacso.reduce ((x,num) => x + num, 0 )
console.log (tinhtong)