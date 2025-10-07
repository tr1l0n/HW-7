let arr1 = [1, 2, 3];
arr1[1] = 10;
console.log(arr1);


let arr2 = ['a', 'b', 'c'];
arr2.push('d');
console.log(arr2);


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
for (let i = 0; i < arr3.length;i++) {
    total += arr3[i];
}
console.log(total);

let arr4 = [1, 2, 3, 4, 5];
for (a of arr4) {
    console.log(a);
}

let arr5 = ['apple', 'banana', 'pineapple', 'carrot', 'rot'];
for (b of arr5) {
    if (b.length > 5) {
        console.log(b);
    }
}


let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c = Math.max(...arr6); //подивився в інтернеті як знайти макс в масиві,сам розібрався
console.log(c);

let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (f of arr7) {
    if (f % 2 === 0) {
        console.log(f);
    }
}