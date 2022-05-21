// promise đại diện cho một thao tác, hành động gì đấy
// không biết thao tác này thành công hay thất bại

// const xinSoDt = () => {
//     console.log("Goi dien cho thang ban cho t xin so thang Nam")
//     console.log("Dang tim...")

//     const thaoTacTimKiem = new Promise((resolve, reject) => {
//         let daTimThay

//         setTimeout(() => {
//             daTimThay = true
//             if(daTimThay){
//                 sdt = 123456
//                 console.log(`Day roi so dien thoai no la ${sdt}`)
//                 resolve(sdt)
//             } else {
//                 reject("Tao khong co so thang Nam")
//             }
//         }, 1000);
//     })
//     return thaoTacTimKiem
// }

// xinSoDt()
//     .then(sdt => console.log(`Da xin duoc so thang Nam: ${sdt}`))
//     .catch(loi => console.log(loi))


const xinSoDt = () => {
    console.log("Goi dien cho thang ban cho t xin so thang Nam")
    console.log("Dang tim...")

    const thaoTacTimKiem = new Promise((resolve, reject) => {
        let daTimThay

        setTimeout(() => {
            daTimThay = true
            if(daTimThay){
                sdt = 123456
                console.log(`Day roi so dien thoai no la ${sdt}`)
                resolve(sdt)
            } else {
                reject("Tao khong co so thang Nam")
            }
        }, 1000);
    })
    return thaoTacTimKiem
}

// sac pin

const sacPin = (sdt) => {
    console.log("Doi ti dang sac pin")

    let chayPin

    const thaoTacSacPin = new Promise((resolve, reject) => {
        setTimeout(() => {
            chayPin = true

            if(!chayPin) {
                console.log("Sac day pin. Bat dau goi cho thang Nam")
                resolve(sdt)
            } else {
                reject("Chay pin roi. Toang!!!!")
            }
        }, 1500);
    })
    return thaoTacSacPin
}

const goiChoNam = sdt => console.log(`Dang noi chuyen voi Nam tai so ${sdt}`)


xinSoDt()
    .then(sdt => {
        sacPin(sdt)
            .then(sdt => goiChoNam(sdt))
            .catch(loi => console.log(loi))
    })
    .catch(loi => console.log(loi))