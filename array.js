//  const books = [
//     { title: "Book 1", price: 10 },
//     { title: "Book 2", price: 20 },
//     { title: "Book 3", price: 30 }
// ]
// let total = 0;
// function sum(arr){
// for(let x of arr){
//     total+= x.price;
// }
// return total;
// }
// console.log(sum(books));

let S = "hellochips";

function minMoves(S) {
    let counter = 0;

    S = S.toUpperCase();
    // let str = "CHIPS"
    const arr = S.split("");
    console.log(arr);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 'C') {
            counter++;
        }
        else if (arr[i] !== "H")
         {
            counter++;
        }
        else if (arr[i] !== 'I') {
            counter++;
        }
        else if (arr[i] !== 'P') {
            counter++;
        }
        else if (arr[i] !== 'S') {
            counter++;
        }
        

    }
    return counter;
}

console.log(minMoves(S));