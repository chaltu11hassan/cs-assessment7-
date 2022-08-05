// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(array){
    let answer = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] + array[j] === 0){
                answer.push(array[i])
            }
            if(answer.length>0){
                return true
            }
        }
    return false
    }
}

// For example:

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

console.log(addToZero([-1, 1]));
console.log(addToZero([1, 2, 3]));

//I think the runtime of addToZero solution is 0(n^2). 
// The space complexity of sumOfZero is 0(n^2) because the length of the string increases and the memory needed to hold it will increase in a linear way.





// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.


function hasUniqueChars(str){
    let uniqueChars = new Set([]);
    for (let i =0; i < str.length; i++){
        uniqueChars.add(str[i]);
    }
    return uniqueChars.size === str.length;
}


// For example:

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'));

//I believe the solution runtime is 0(n)
// The space complexity is 0(n) because the length of the string that is an array of characters increases, and the memory required will increase in a linear way




// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
for(letter in alphabet) {
    if(!str.includes(alphabet[letter])){
        return false
        }
    } return true 
}     

// For example:

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// The runtime will be 0(n)
// The space complexity is 0(n) because as the length of the string gets larger, the memory required to store it will also need to get larger; in a linear style




// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr){
   let longestWord = ""
    for(word in arr){
        if(arr[word].length >= word.length){
        longestWord = arr[word]
        }
    }
    return longestWord.length 
}


// For example:

findLongestWord(["hi", "hello"]);
// -> 5

console.log(findLongestWord(["hi", "hello"]));

//I belive the runtime is 0(n).
// The space complexity is 0(n) as the length of the array increases, the memory needed to store it will also show linear growth 
