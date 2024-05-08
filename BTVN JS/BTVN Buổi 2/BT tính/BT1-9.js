function bai1den9() {
    let n = 2000;  
    function tongTu1DenN(n) {
        return n * (n + 1) / 2;
    }

    function tongBinhPhuong(n) {
        return n * (n + 1) * (2 * n + 1) / 6;
    }

    function tongNghichDao(n) {
        let tong = 0;
        for (let i = 1; i <= n; i++) {
            tong += 1 / i;
        }
        return tong;
    }

    function tongNghichDaoSoChan(n) {
        let tong = 0;
        for (let i = 1; i <= n; i++) {
            tong += 1 / (2 * i);
        }
        return tong;
    }

    function tongNghichDaoSoLe(n) {
        let tong = 0;
        for (let i = 0; i <= n; i++) {
            tong += 1 / (2 * i + 1);
        }
        return tong;
    }

    function tongPhanSoNghichDao(n) {
        let tong = 0;
        for (let i = 1; i <= n; i++) {
            tong += 1 / (i * (i + 1));
        }
        return tong;
    }

    function tongPhanSoTuoi(n) {
        let tong = 0;
        for (let i = 1; i <= n; i++) {
            tong += i / (i + 1);
        }
        return tong;
    }

    function tongPhanSoXenKe(n) {
        let tong = 0;
        for (let i = 0; i <= n; i++) {
            tong += (2 * i + 1) / (2 * i + 2);
        }
        return tong;
    }

    function giaiThua(n) {
        let tich = 1;
        for (let i = 1; i <= n; i++) {
            tich *= i;
        }
        return tich;
    }

    console.log(`Tổng từ 1 đến ${n}: ${tongTu1DenN(n)}`);
    console.log(`Tổng bình phương từ 1^2 đến ${n}^2: ${tongBinhPhuong(n)}`);
    console.log(`Tổng dãy số hạng nghịch đảo từ 1 đến 1/${n}: ${tongNghichDao(n)}`);
    console.log(`Tổng dãy số hạng nghịch đảo các số chẵn từ 2 đến 2*${n}: ${tongNghichDaoSoChan(n)}`);
    console.log(`Tổng dãy số hạng nghịch đảo các số lẻ từ 1 đến 2*${n}+1: ${tongNghichDaoSoLe(n)}`);
    console.log(`Tổng dãy số hạng 1/(i*(i+1)) từ 1 đến ${n}: ${tongPhanSoNghichDao(n)}`);
    console.log(`Tổng dãy số hạng i/(i+1) từ 1 đến ${n}: ${tongPhanSoTuoi(n)}`);
    console.log(`Tổng dãy số hạng (2i+1)/(2i+2) từ 0 đến ${n}: ${tongPhanSoXenKe(n)}`);
    console.log(`Giai thừa của ${n}: ${giaiThua(n)}`);
}

bai1den9();
