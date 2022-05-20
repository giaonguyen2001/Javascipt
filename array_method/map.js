// map() : sử dụng map thường thay thế cho for loop, dùng để thay đổi các phần tử trong mảng
// theo yêu cầu, chỉ thay đổi trong mảng mới chứ không làm thay đổi mảng ban đầu

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let mapArr = arr.map((element) => {
    return (
        `<td> ${element}</td>`
    )
});

console.log(arr);

console.log(mapArr)