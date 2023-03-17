// take a restaurent example

// converting callback hell to promises

function greeting(){

return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("hello Welcome to the resataurent")
    }, 1000);
})
}

function giveOrder(){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Giving food order")
        }, 1000);
    })
    }

    function Payment(){

        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve("paying the bill of order")
            }, 1000);
        })
        }

        function thankyou(){

            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve("Thnk you for coming")
                }, 1000);
            })
            }

            greeting().then((res)=>{console.log(res)})