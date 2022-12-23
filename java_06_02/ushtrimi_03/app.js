const vargu1 = ["POO", "KNK", "Ueb1", "Ueb2", "AOK", "SSH"];

console.log("toString: ", vargu1.toString());
console.log("Length: ", vargu1.length);
console.log("First element: ", vargu1[0]);

// push 
vargu1.push("MS");
console.log("vargu1 after push: ", vargu1.toString());
// pop
vargu1.pop();
console.log("vargu1 after pop: ", vargu1.toString());
//shift
vargu1.shift();
console.log("vargu1 after shift: ", vargu1.toString());
// unshift
vargu1.unshift("POO");
console.log("vargu1 after unshift: ", vargu1.toString());

console.log("vargu1 after sort: ", vargu1.sort().toString());
console.log("vargu1 after reverse sort: ", vargu1.sort().reverse().toString());

// number sorting:
const varguNumrave = [10, 20, 5, 1, 9, 11, 15 ,100, 25, 90];
console.log("Vargu i numrave: ", varguNumrave.toString());
console.log("sort: Vargu i numrave: ", varguNumrave.sort().toString());
// (a, b) => a - b
const sortedNumbers  = varguNumrave.sort(
    (param1, param2) => param1 - param2
)
console.log("Sorted numbers: ", sortedNumbers);

const reverseSortedNumbers  = varguNumrave.sort(
    (param1, param2) =>  param2 - param1
)
console.log("Reverse numbers: ", reverseSortedNumbers);

// map
const newArray = varguNumrave.map(
    (value, index, vargu) => {
        return value * 5;
    }
)
console.log("New array: ", newArray);

const sumArrayReducer = varguNumrave.reduce(
    (prev, value, index, vargu) => {
        return prev + value;
    }
)
console.log("sumArrayReducer: ", sumArrayReducer);

const filterArray = varguNumrave.filter(
    (value, index, array) => value > 20
)
console.log("filterArray: ", filterArray);
