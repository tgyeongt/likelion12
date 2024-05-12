function camelize(str) {
    str = prompt("문자열을 입력하시오: ").split("-");
    str = str.slice(1)[0].toUpperCase();
    return str.join('');
}
alert(camelize());



// // 2번
// function filterRange(arr,a,b) {
//     return arr.filter((arr) => a <= arr && arr <= b);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (조건에 맞는 요소)
// alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)