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

const sacPin = () => {
    console.log("Doi ti dang sac pin")

    let chayPin

    const thaoTacSacPin = new Promise((resolve, reject) => {
        setTimeout(() => {
            chayPin = false

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

const hanhDong = async() => {
    try {
        const sdt = await xinSoDt()
        try {
            await sacPin()
            goiChoNam(sdt)
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        console.log(error)
    }
}

hanhDong()