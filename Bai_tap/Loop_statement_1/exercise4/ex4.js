function fibonacci(){
 //   let num= +document.getElementById("num").value;
    let a = 1;
    let b = 1;
    // if(num >0){
    //     if(num ===1){
    //         document.writeln(1);
    //     } else if (num===2){
    //         document.writeln(1);
    //         document.writeln(1);
    //     } else if (num>2){
            for (let i = 1; ; i++) {

                let c = a+b;
                a = b;
                b = c;
                if(a%5 ===0){
                document.writeln(a);
                break;}
            }
    //     }
    // } else {
    //     alert("nhap vao so nguyen duong");
    // }
}