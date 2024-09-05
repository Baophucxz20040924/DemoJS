let mangSoThuc = [3.5, 4.2, 5.6, 6.1, 7.4];

// 1. Tính trung bình cộng phần tử có phần nguyên chẵn
let soNguyenChan = mangSoThuc.filter(so => Math.floor(so) % 2 === 0);
let trungBinhCongSoChan = soNguyenChan.length ? 
  soNguyenChan.reduce((tong, so) => tong + so, 0) / soNguyenChan.length : -1;
console.log(`Trung bình cộng của các phần tử có phần nguyên chẵn: ${trungBinhCongSoChan}`);

// 2. Sắp xếp mảng tăng dần
mangSoThuc.sort((a, b) => a - b);
console.log("Mảng đã sắp xếp tăng dần:", mangSoThuc);

// 3. Chuyển tất cả phần tử có phần nguyên lẻ thành 1.23
let mangDaChuyenDoi = mangSoThuc.map(so => Math.floor(so) % 2 !== 0 ? 1.23 : so);
console.log("Mảng sau khi chuyển phần nguyên lẻ thành 1.23:", mangDaChuyenDoi);
