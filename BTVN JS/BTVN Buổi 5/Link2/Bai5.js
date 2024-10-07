const mang1 = [1, 2, 3, 4, 5];
const mang2 = [2, 3, 6];

const phanTuKhac = [...mang1.filter((phanTu) => !mang2.includes(phanTu)), ...mang2.filter((phanTu) => !mang1.includes(phanTu))];

console.log(phanTuKhac);
