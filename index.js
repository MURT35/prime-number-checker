function isPrime (number){
    for(let i=2; i*i<=number;i++){
 if (number % i === 0) return false;
    }
   return number > 1;
    
}
module.exports.isPrime= isPrime
console.log(isPrime(3))
console.log(isPrime(21))

