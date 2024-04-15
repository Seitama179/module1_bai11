function fibonacci(){
    let num= +document.getElementById("num").value;
    let sum = 0;
    let a = 1;
    let b = 1;
    if(num >0){
        if(num ===1){
            document.getElementById(result).innerHTML= 1;
        } else if (num===2){
            document.getElementById(result).innerHTML= 2;
        } else if (num>2){
            for (let i = 1; i <= num; i++) {
                sum += a;
                let c = a+b;
                a = b;
                b = c;
            }
            document.getElementById("result").innerText= "Tong cua "+ num + " so Fibonacci dau tien la: " + sum;
        }
    } else {
        alert("nhap vao so nguyen duong");
    }
}
