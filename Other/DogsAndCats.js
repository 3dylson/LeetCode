/**
 * There are a total of N animals waiting in a line, some of which are dogs and others are cats. 
 * It might be possible that all the animals in the line are dogs or all the animals are cats. 
 * A string S of N characters C and D represents the order of cats and dogs in the line. The i-th character is equal to C if the i-th animal in the line is a cat. 
 * Similarly, the i-th character is equal to D if the i-th animal in the line is a dog.
 * 
 * The animals are fed in the order they stay in the line. Each dog eats exactly 1 portion of dog food and similarly each cat eats exactly 1 portion of cat food. 
 * Moreover, you have extra portions of cat food. Every time a dog eats food, you bring M extra portions of cat food for cats.
 * 
 * Animals have to be fed in the order they wait in line and an animal can only eat if 
 * the animal before it has already eaten. That means that if you run out of dog (or cat) 
 * food portions and a dog (or a cat) is about to get fed, the line will not move,
 * as all the animals will wait patiently.
 * 
 * You need to determine if in this scenario all the dogs in the line will be fed. 
 * Note that this means that some cats might remain in the line, but worry not, you will eventually feed them later!
 * 
 * @param {number} numOfCase
 * @param {number} numOfAnimals
 * @param {number} numOfDogPortions
 * @param {number} numOfCatPortions
 * @param {number} numOfCatAddedPortions
 * @param {Array[numOfAnimals]} animalsArrangement
 * 
 */
 function feedTheAnimals(numOfCase, numOfAnimals, numOfDogPortions, numOfCatPortions, numOfCatAddedPortions, animalsArrangement) {
    
    let catPortions = numOfCatPortions;
    let dogPortions = numOfDogPortions;
    let numOfDogs = 0;
    let numOfCats = 0;

    for (let i = 0; i < numOfAnimals; i++) {
        if (animalsArrangement[i] === 'D') {
            numOfDogs++;
        } else {
            numOfCats++;
        }
    }
    
    let isFed = true;
    animalsArrangement.forEach(animal => {

        if (animal === 'D' && isFed) {
            if (dogPortions > 0) {
                dogPortions--;
                isFed = true;
                catPortions += numOfCatAddedPortions;
                numOfDogs--;
            }
            else {
                isFed = false;
            } 
        }
         
        if (animal === 'C' && isFed) {
            if (catPortions > 0) {
                catPortions--;
                isFed = true;
            }
            else {
                isFed = false;
            }
        }
    });

    if (numOfDogs === 0) {
        return console.log('Case #'+numOfCase+": YES");
    }
    else {
        return console.log('Case #'+numOfCase+": NO");
    }
}

console.log(feedTheAnimals(1, 6, 10, 4, 0, ['C', 'C', 'D', 'C', 'D', 'D']));
console.log(feedTheAnimals(2, 4, 1, 2, 0, ['C', 'C', 'C', 'C']));
console.log(feedTheAnimals(3, 4, 2, 1, 0, ['D', 'C', 'C', 'D']));