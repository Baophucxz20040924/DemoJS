let soThuNhat = 15;
let soThuHai = 22;
let soThuBa = 9;

let soLonNhat = soThuNhat > soThuHai ? (soThuNhat > soThuBa ? soThuNhat : soThuBa) : (soThuHai > soThuBa ? soThuHai : soThuBa);
console.log("Số lớn nhất trong ba số là: " + soLonNhat);
