let mang = [3, 5, 9, 12, 15];
let giaTriX = 10;

// 1. Đếm số phần tử nhỏ hơn giaTriX
let soPhanTuNhoHonX = mang.filter(so => so < giaTriX).length;
console.log(`Số phần tử nhỏ hơn ${giaTriX}: ${soPhanTuNhoHonX}`);

// 2. Tính trung bình cộng các số chia hết cho 3 mà không chia hết cho 5
let soChiaHetCho3NhungKhong5 = mang.filter(so => so % 3 === 0 && so % 5 !== 0);
let trungBinhCong = soChiaHetCho3NhungKhong5.length ? 
  soChiaHetCho3NhungKhong5.reduce((tong, so) => tong + so, 0) / soChiaHetCho3NhungKhong5.length : 0;
console.log(`Trung bình cộng các số chia hết cho 3 nhưng không chia hết cho 5: ${trungBinhCong}`);

// 3. Kiểm tra trật tự mảng
let sapXepTangDan = mang.every((so, i, mang) => i === 0 || mang[i - 1] <= so);
let sapXepGiamDan = mang.every((so, i, mang) => i === 0 || mang[i - 1] >= so);
console.log(sapXepTangDan || sapXepGiamDan ? "CÓ" : "KHÔNG");
