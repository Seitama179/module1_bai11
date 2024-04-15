function fibonacci(){
    let num= +document.getElementById("num").value;
    let a = 1;
    let b = 1;
    if(num >0){
        if(num ===1){
            document.writeln(1);
        } else if (num===2){
            document.writeln(1);
            document.writeln(1);
        } else if (num>2){
            for (let i = 1; i <= (num/2); i++) {
                document.writeln(a);
                document.writeln(b);
                a = a + b;
                b = a + b;
            }
        }
             } else {
        alert("nhap vao so nguyen duong");
    }
}