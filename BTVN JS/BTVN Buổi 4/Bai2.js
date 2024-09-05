let mang = [1, 2, 4, 5, 6, 7, 8];

// 1. Kiểm tra có 2 số chẵn gần nhau hay không
let coSoChanLienKe = false;
for (let i = 0; i < mang.length - 1; i++) {
  if (mang[i] % 2 === 0 && mang[i + 1] % 2 === 0) {
    coSoChanLienKe = true;
    break;
  }
}
console.log(coSoChanLienKe ? "CÓ" : "KHÔNG");

// 2. Tách mảng thành 2 mảng lẻ và chẵn
let mangLe = mang.filter(so => so % 2 !== 0);
let mangChan = mang.filter(so => so % 2 === 0 && so !== 0);

if (mangLe.length === 0 || mangChan.length === 0) {
  console.log(-1);
} else {
  console.log(`${mangLe.join(",")} - ${mangChan.join(",")}`);
}

// 3. Sắp xếp mảng giảm dần
mang.sort((a, b) => b - a);
console.log("Mảng đã sắp xếp giảm dần:", mang);
