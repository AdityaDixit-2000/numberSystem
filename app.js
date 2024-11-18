const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let primeArray = [];
  for(let i=0; i<numbers.length; i++){
    let flag = true;
    for(let j=2; j<numbers[i]; j++){
        if(numbers[i]%j==0){
            flag = false;break;
        }
    }
    if(flag) primeArray.push(numbers[i]);
  }
//   console.log(primeArray);

//   Finding Max and Min in primeArray
let minPrime = Infinity;
for(let k=0; k<primeArray.length; k++){
    if(minPrime>primeArray[k]) minPrime = primeArray[k];
}

let maxPrime = -Infinity;
for(let l=0; l<primeArray.length; l++){
    if(maxPrime<primeArray[l]) maxPrime = primeArray[l];
}
// console.log(minPrime, maxPrime);

//   Calculating sum of all numbers in primeArray
let sumPrime = 0;
for(let m=0; m<primeArray.length; m++){
    sumPrime += primeArray[m];
}
// console.log(sumPrime);