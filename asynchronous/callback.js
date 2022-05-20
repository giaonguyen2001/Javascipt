// Xin so dien thoai thang Nam cuc ki vat va 

// const xinSoDt = () => {
//     let sdt

//     console.log("Hoi thang ban de xin so thang Nam")

//     console.log("Thang ban tim so thang Nam")

//     setTimeout(() => {
//         sdt = 123456
//         console.log("Da tim thay so thang Nam")
//     }, 1000);

//     return sdt;
// }

// const sdtThangNam = xinSoDt()

// console.log(sdtThangNam);

// Cach xu li viec xin so dt trong js


// const xinSoDt = (callback) => {
//     let sdt

//     console.log("Hoi thang ban de xin so thang Nam")

//     console.log("Thang ban tim so thang Nam")

//     setTimeout(() => {
//         sdt = 123456
//         console.log("Da tim thay so thang Nam")
//         callback(sdt)
//     }, 1000);

//     return sdt;
// }

// const sauKhiNhanDuocSoDienThoai = (soDienThoaiDaNhan) => 
//     console.log(`Day la so dien thoai thang Nam: ${soDienThoaiDaNhan}`)

// xinSoDt(sauKhiNhanDuocSoDienThoai)


// Vấn đề với quá nhiều callback function

const xinSoDt = hamGoiLaiSauKhiTimRa => {
    let sdt
    console.log("Goi dien cho thang ban de xin so dien thoai thang Nam")

    console.log("Thang ban dang tim so thang Nam")

    setTimeout(() => {
        sdt = 123456
        console.log("Da tim ra so thang Nam")
        hamGoiLaiSauKhiTimRa(sdt, goiChoNam)
    }, 1000)
}

const sacPin = (sdt, hamGoiLaiSauKhiSacPin) => {
    console.log("Dang sac pin")

    setTimeout(() => {
        console.log("Da sac pin xong. Bat dau goi cho Nam")
        hamGoiLaiSauKhiSacPin(sdt)
    }, 2000)
}

const goiChoNam = (sdt) => {
    console.log(`Dang goi so ${sdt}`)
}

xinSoDt(sacPin)