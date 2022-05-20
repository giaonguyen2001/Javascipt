const buaAn = {
    buaSang : "xoi",
    buaTrua : "pho",
    buaToi : "com"
}

const buaAn1 = {...buaAn, buaChieu: "che"}

console.log(buaAn1)


const sinhVien = {
    ten : "Giao",
    nam : 1
}

const sinhVienSapTotNghiep = {
    ...sinhVien,
    nam : 4, 
    sapTotNghiep : true
}

console.log(sinhVienSapTotNghiep)