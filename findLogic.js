let str = "my name is komal"

function findlogic(str){
    let wordarr = str.split(" ");
    // console.log(wordarr);
    let reverseStr = "";
    for(let i = 0; i<wordarr.length; i++){
        let word = wordarr[i];
        let rev_word = "";
        if(i%2 == 0){
            reverseStr = reverseStr.concat(word, " ");
        }
        else{
            
            for(let j= word.length-1; j>=0; j--){
                rev_word = rev_word + word.charAt(j);
                // console.log(rev_word);
            }
            reverseStr = reverseStr.concat(rev_word, " ");
        }
    }

    return reverseStr;
}

console.log(findlogic(str));