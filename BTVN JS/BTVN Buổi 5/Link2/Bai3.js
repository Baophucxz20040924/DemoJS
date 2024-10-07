const chuDe = [
    {
      chuDe: "ReactJS",
      baiViet: [
        { maBaiViet: "id1", tieuDe: "title1" },
        { maBaiViet: "id2", tieuDe: "title2" },
      ],
    },
    {
      chuDe: "Vue.js",
      baiViet: [
        { maBaiViet: "id3", tieuDe: "title3" },
        { maBaiViet: "id4", tieuDe: "title4" },
      ],
    },
  ];
  
  const tatCaBaiViet = chuDe.reduce((tichLuy, hienTai) => {
    return tichLuy.concat(hienTai.baiViet);
  }, []);
  
  console.log(tatCaBaiViet);