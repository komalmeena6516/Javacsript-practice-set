
let food= "drink TEA....";
let friend = {
    
    name: "Aman",
    age:56,
    lang: "hindi",
    quality: function (){
        return this.name + " is " +this.age + " years old" ;
    },
    hobby : food

}
console.log(friend.hobby);
// let food= "drink TEA....";

friend.name = "Umesh";

console.log(friend.quality());