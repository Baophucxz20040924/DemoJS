function cl(n) {
    console.log("Các số chẵn từ 1 đến " + n + ":");
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
function soNT(n){
    if(n<=1) return false;
    if(n<=3) return true;
    
    for(let i= 2; i*i<=n;i++){
        if (n % i==0) return false;
    }
        return true;
}
function NT(n) {
    console.log("Các số nguyên tố từ 1 đến " + n + ":");
    for (let i = 1; i <= n; i++) {
        if (soNT(i)) {
            console.log(i);
        }
    }
}
let n=20;
NT(n);
cl(n);