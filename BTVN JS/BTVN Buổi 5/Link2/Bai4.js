const mangSo = [49, 30, 19, 2, 29];

const tong = mangSo.reduce((tichLuy, hienTai) => tichLuy + hienTai, 0);

const tich = mangSo.reduce((tichLuy, hienTai) => tichLuy * hienTai, 1);

console.log("Tổng:", tong);
console.log("Tích:", tich); 