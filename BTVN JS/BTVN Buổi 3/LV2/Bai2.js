const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" }, 
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
];

// Đếm số lượng thành viên nam và nữ
let maleCount = 0;
let femaleCount = 0;

for (let nguoi of listPersons) {
    if (nguoi.gender === "nam") {
        maleCount++;
    } else if (nguoi.gender === "nữ") {
        femaleCount++;
    }
}

console.log(`Số lượng thành viên nam: ${maleCount}`);
console.log(`Số lượng thành viên nữ: ${femaleCount}`);

// Thống kê số lượng người già, thanh niên và trẻ con
let thongke = {
    treCon: 0,
    thanhNien: 0,
    nguoiGia: 0
};

for (let nguoi of listPersons) {
    if (nguoi.age >= 30) {
        thongke.nguoiGia++;
    } else if (nguoi.age >= 18) {
        thongke.thanhNien++;
    } else {
        thongke.treCon++;
    }
}

console.log(thongke);
