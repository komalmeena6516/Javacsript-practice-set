// class student{
//     constructor(name, age, cls){
//         this.myname = name;
//         this.age = age;
//         this.cls = cls;
//     }

//     biodata(){
//         console.log(`name is ${this.myname} `)
//     }
// }

// let obj1 = new student(komal, 22, 455);
// obj1.biodata

//your code here
let arr = [1, 2, 2,  2]

let n = arr.length;
let maj = Math.floor(n/2);


function check(arr, n){

   for(let i = 0; i<n; i++){
	let count = 0;
	let curr = arr[i];
	for(let j = i+1; j<n; j++){
		if(curr === arr[j]){
			count++;
		}
		if(count > maj){
			return arr[j];
		}
	}

}

return -1; 
}

console.log(check(arr, n));






