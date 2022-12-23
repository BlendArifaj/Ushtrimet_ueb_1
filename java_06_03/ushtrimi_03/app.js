const vargu1 = [
    "POO", "KNK", "UEB1", "UEB2", 1, 2, 3, 4, 5, {
        emri: 'test',
        mbiemri: 'test',
    }
]

// length:
let length = vargu1.length;

// sort:
const lendet = ["POO", "KNK", "SSH", "UEB1", "AOK"];
console.log("Vargu: ", lendet.toString());
console.log("sorted Vargu: ", lendet.sort().toString());
console.log("reverse sorted Vargu: ", lendet.sort().reverse().toString());

const piket = [1, 10 , 15, 25, 0, 95, 91, 100, 120];
// console.log("piket: ", piket);
// console.log("sorted piket: ", piket.sort());
// console.log("reverse sorted piket: ", piket.sort().reverse());

const sortedPiket = piket.sort(
    (num1, num2) => {
        return num1 - num2;
    }
)
console.log("sorted piket: ", sortedPiket);

const reverseSortedPiket = piket.sort(
    (num1, num2) => num2 - num1
)
console.log("reverse sorted piket: ", reverseSortedPiket);

// push
console.log("Lendet: ", lendet.toString());
lendet.push("MS");
console.log("Lendet/push: ", lendet.toString());
//pop
lendet.pop();
console.log("Lendet/pop: ", lendet.toString());
// shift
lendet.shift();
console.log("Lendet/shift: ", lendet.toString());
lendet.unshift("UEB1");
console.log("Lendet/unshift: ", lendet.toString());

const vargu11 = [1, 2];
const vargu12 = [2 , 3];
console.log(vargu11.concat(vargu12));

// splice
console.log("lendet: ", lendet.toString());
const lendetLarguar = lendet.splice(1, 0, "POO2");
console.log("lendet: ", lendet.toString());

const notat = [1, 2, 5, 4, 3, 1];
const notatKonvertuara = notat.map(
    (value, index, vargu) => {
        return value + 5;
    }
)

const notatReducer = notat.reduce(
    (prev, value, index, vargu) => {
        return prev + value;
    }
)
console.log("Notat: ", notat)
console.log("Notat: ", notatKonvertuara)
console.log("Shuma: ", notatReducer)

