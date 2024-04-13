let n = +prompt("Nhập n số nguyên tố đầu tiên");
let count = 0;
let start = +prompt("Nhập số bắt đầu")
while (count<n){
    if (checkPrime(start)){
        document.write(start+" ");
        count++;
    }
    start++;
}

function checkPrime(n){
    //     tra ve true neu la so nguyen to
    //     tra ve false neu ko la so nguyen to
    if (n<2) return false;
    if (n<4) return true;
    for (let i = 2; i < n ; i++) {
        if(n%i ===0 ) return false;
    }
    return true;
}
