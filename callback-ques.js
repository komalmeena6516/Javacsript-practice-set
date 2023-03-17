            let n = 5;
            let op = "-";


 function sum(num, add){
    console.log(add(num));
 }


switch(op){
    case "+" : sum(n, () =>{return n+n });  
    break;
    case "-" : sum(n, () =>{return n-n });  
    break;
    case "*" : sum(n, () =>{return n*n });  
    break;
    case "/" : sum(n, () =>{return n/n });  
    break;

}