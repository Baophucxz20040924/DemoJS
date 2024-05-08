function soNT(n){
if(n<=1) return false;
if(n<=3) return true;

for(let i= 2; i*i<=n;i++){
    if (n % i==0) return false;
}
    return true;
}
console.log(soNT(29));
