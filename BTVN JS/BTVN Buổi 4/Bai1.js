let arr = [3, 5, 2, 9, 3, 7, 6, 3, 2];

// 1. In ra giá trị lớn nhất và nhỏ nhất của mảng
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(`Giá trị lớn nhất: ${max}, Giá trị nhỏ nhất: ${min}`);

// 2. In ra tổng, tích, giá trị trung bình của mảng
let sum = arr.reduce((acc, num) => acc + num, 0);
let product = arr.reduce((acc, num) => acc * num, 1);
let avg = sum / arr.length;
console.log(`Tổng: ${sum}, Tích: ${product}, Giá trị trung bình: ${avg}`);

// 3. Đếm số 3 xuất hiện bao nhiêu lần
let count3 = arr.filter(num => num === 3).length;
console.log(`Số lần số 3 xuất hiện: ${count3}`);

// 4. Đếm có bao nhiêu số nguyên tố
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let primeCount = arr.filter(isPrime).length;
console.log(`Số lượng số nguyên tố: ${primeCount}`);

// 5. Xóa phần tử tại vị trí 3
arr.splice(3, 1);
console.log("Mảng sau khi xóa phần tử tại vị trí 3:", arr);

// 6. Xóa hết các số có giá trị là 2
arr = arr.filter(num => num !== 2);
console.log("Mảng sau khi xóa tất cả các số 2:", arr);

// 7. Kiểm tra và chèn số 8 sau số 6
arr.forEach((num, index) => {
  if (num === 6) {
    arr.splice(index + 1, 0, 8);
  }
});
console.log("Mảng sau khi chèn số 8 sau số 6:", arr);

// 8. Sắp xếp mảng tăng dần
arr.sort((a, b) => a - b);
console.log("Mảng đã sắp xếp tăng dần:", arr);
