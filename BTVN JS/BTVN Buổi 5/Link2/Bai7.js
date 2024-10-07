const demReduce = mangDem.reduce((tichLuy, hienTai) => {
    tichLuy[hienTai] = (tichLuy[hienTai] || 0) + 1;
    return tichLuy;
 }, {});
  
  console.log(demReduce);
  