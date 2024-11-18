const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  for(let i=0; i<numbers.length; i++){
    let flag = true;
    for(let j=2; j<numbers[i]; j++){
        if(numbers[i]%j==0){
            flag = false;break;
        }
    }
    if(flag) console.log(numbers[i]);
  }