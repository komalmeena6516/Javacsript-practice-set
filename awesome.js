let str = "1122333";


function check(str) {
    let i = 0;
    while (i < str.length) {
        count = 0;
        let j = i + 1;

        while (str.charAt(i) == str.charAt(j)) {
            count++;
            j++;
        }
        i = j;
        if (count > 1) {
            return "Awesome";
        }

    }
    return "Good";
}

console.log(check(str));
