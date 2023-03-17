// Contest of f-3

let ScoreBoard = {};

// Opening Ceremony
// race()
// long jump()
// High()
// Award ()

// open ceremony
function OpenCeremony(ScoreBoard, Race100M) {
    ScoreBoard = { red: 0, blue: 0, green: 0, yellow: 0 }
    setTimeout(() => {
        console.log("Let the games begin!");
        Race100M(ScoreBoard, longJump);
    }, 1000);

}


// Race Function
function Race100M(ScoreBoard, longJump) {

    setTimeout(() => {
        const obj = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10
        };
        const arr = Object.keys(obj).sort((a, b) => { obj[a] - obj[b] })

        let newobj = {};
        newobj[arr[0]] = 50;
        newobj[arr[1]] = 25;

        ScoreBoard[arr[0]] += 50;
        ScoreBoard[arr[1]] -= 25;

        console.log("updated score");
        console.log(ScoreBoard);

        longJump(ScoreBoard, HighJump);
    }, 3000);



}

function longJump(ScoreBoard, HighJump) {

setTimeout(() => {
    console.log("Prev Score");
    console.log(score);

    const i = Math.floor(Math.random() * 4) +1;
    if( i==1 ){
        let val = ScoreBoard.red;
        val += 150;
        ScoreBoard.red = val;
        console.log("Winner of LongJump is " + "red");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }
    if(i==2){
        let val = ScoreBoard.blue;
        val += 150;
        ScoreBoard.blue = val;
        console.log("Winner of LongJump is " + "blue");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }
    if(i==3){
        let val = ScoreBoard.green;
        val += 150;
        ScoreBoard.blue = val;
        console.log("Winner of LongJump is " + "green");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }
    if(i==4){
        let val = ScoreBoard.yellow;
        val += 150;
        ScoreBoard.blue = val;
        console.log("Winner of LongJump is " + "yellow");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }

    HighJump(ScoreBoard, AwardCeremony)
}, 2000)
}

function HighJump() {
// console.log("Prev Score");

let person = prompt("Please enter the Color");
if(person == null || person ==""){
    console.log("Event Was cancelled");
    AwardCeremony(score);
}
else{
    if(person == "red"){
        let val = score.red;
        val += 100;
        ScoreBoard.red = val;
        console.log("Winner of HighJump is red");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }
    if(person == "blue"){
        let val = score.blue;
        val += 100;
        ScoreBoard.blue = val;
        console.log("Winner of HighJump is blue");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }
    if(person == "green"){
        let val = score.green;
        val += 100;
        ScoreBoard.green = val;
        console.log("Winner of HighJump is green");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }
    if(person == "yellow"){
        let val = score.yellow;
        val += 100;
        ScoreBoard.yellow = val;
        console.log("Winner of HighJump is yellow");
        console.log("Updated Score");
        console.log(ScoreBoard);
    }
}

}

function AwardCeremony(ScoreBoard) {
let sortArr = Object.keys(ScoreBoard.sort((a, b)=> ScoreBoard[a] - ScoreBoard[b]));

let n = sortArr.length;

console.log(`${sortArr[n-1]} Came First with ${ScoreBoard[sortArr[n-1]]} points`);

console.log(`${sortArr[n-2]} Came Second with ${ScoreBoard[sortArr[n-2]]} points`);

console.log(`${sortArr[n-3]} Came third with ${ScoreBoard[sortArr[n-3]]} points`);

console.log(`${sortArr[n-4]} Came Fourth with ${ScoreBoard[sortArr[n-4]]} points`);
}


OpenCeremony(ScoreBoard, Race100M);