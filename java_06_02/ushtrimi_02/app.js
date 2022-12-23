const text1 = "this is is text in JS";
const text2 = 'this is is text in JS';
const text3 = `this is is text in JS`;

//  String template
const emri = "Filan"
const mbiemri = "Fisteku"
const nota = 10.0;
const text = `Studenti me emrin: ${emri.concat(' ', mbiemri)}
            ka noten mesatare: ${nota}
            `
console.log(text);

const newText = new String("Ushtrimet ne lenden UEB 1");
console.log("Text: ", newText);

// length
const textLength = newText.length;
console.log("Length: ", textLength);

// slice
console.log("Slice(10,15): ",  newText.slice(10, 15));
console.log("Slice(10): ",  newText.slice(10));
console.log("Slice(-5): ",  newText.slice(-5));
console.log("Slice(-10, -5): ",  newText.slice(-10, -5));

// substring
// substring(start, numOfCharacters);
console.log("Substring(10, 15): ",  newText.substring(10, 15));

// replace & replaceAll
const content = "Programimi i orientuar ne objekte dhe Programimi ne ueb 1";
const contentReplaced = content.replace("Programimi", "Mesimi");
const contentReplacedAll = content.replace("Programimi", "Mesimi");

console.log("replace: ", contentReplaced);
console.log("replaceAll: ", contentReplaced);

// 
const contentUpperCase = content.toUpperCase();
const contentLowerCAse = content.toLowerCase();

// trim
const context = "   This is a text!     ";
console.log("trim: ", context); // trimEnd() or trimStart()
console.log("trim: ", context.trim()); // trimEnd() or trimStart()

// padStart | padEnd
const tel = "49999999";
console.log("padStart: ", tel.padStart(10, "*"))
console.log("padStart: ", tel.padStart(11, "0"))

// charAt()
const randomText ="this is a random text";
const firstChar = randomText.charAt(0);
const lastChar = randomText.charAt(randomText.length - 1);
const firstChar2 = randomText[0];
const lastChar2 = randomText[randomText.length - 1];

// split
console.log("text: ", content);
const numriFjaleve = content.split(' ').length
console.log("Numri i fjaleve: ", numriFjaleve);

// indexOf 
console.log("indexOf('Programimi')", content.indexOf("r"));

// includes(content, startFrom)
console.log("content includes POO ? ", content.includes("POO", 10));
console.log("content includes ueb 1 ? ", content.includes("ueb 1"));

// startsWith | endsWith
console.log("Content startsWith Programimi ?", content.startsWith("Programimi"))
console.log("Content endsWith Programimi ?", content.endsWith("Programimi"))
