  // iterable approach
  const arrayToList = function (arr) {
    // Write your code here
    let list = null;
    
    for(let i = arr.length - 1; i >= 0; i--){
      list = {value: arr[i], rest: list};
    }
    return list;
  };

  
 console.log(arrayToList([10, 20, 30, 40]));




  // recursive approach
  const arrayToListRecursive = function (arr) {
    // Write your code here
    if(arr.length === 0){
      return null;
    }

    return {
      value: arr[0],
      rest: arrayToListRecursive(arr.slice(1))
    };
  };


 console.log(arrayToListRecursive([10, 20, 30, 40]));
  
  /* Output: {value: 10, rest: {value: 20, rest: {
value:	30
rest:	{value: 40, rest: null}
}}} */
  // 


  /* Output: {value: 5, rest: {value: 4, rest: {
value:	3
rest:	{
value:	2
rest:	{value: 1, rest: null}
}
}}} */