let m=123456;

let a=Math.trunc(m / 1000);
let b=Math.trunc(m%1000/100);
let c=Math.trunc(m%100/10);
let d=Math.trunc(m%10/1);
console.log(d+""+""+c+""+b+""+a);
