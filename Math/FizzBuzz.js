/**
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i if non of the above conditions are true.
 * 
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzzWithHashMap = (n) => {
    const answer = []
    const hashMap = new Map

    hashMap.set(3,"Fizz")
    hashMap.set(5,"Buzz")
    
    for (let i = 1; i <= n; i++){
        let result = ""
        for(let key of hashMap.keys()) {
            if (i % key == 0) {
                result+=hashMap.get(key)
            }
        }
        if (result == ""){
            result = i.toString()
        }

        answer.push(result)
    }

     return answer;
}

console.log(fizzBuzzWithHashMap(15))