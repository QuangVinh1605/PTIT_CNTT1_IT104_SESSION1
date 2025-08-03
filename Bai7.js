function tinhTongCacMang(...dsMang) {
    const ketQua = dsMang.map(mang => {
        return mang.reduce((tong, giaTri) => tong + giaTri, 0);
    });
    return ketQua;
}
const kq1 = tinhTongCacMang([1, 2, 3], [4, 5], [10]);
console.log(kq1);


const kq2 = tinhTongCacMang([10, 20], [], [5, 5, 5]);
console.log(kq2);
