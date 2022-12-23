const text1 = "this is a string";
const text2 = 'this is also a string!';
const text3 = `this is also a string!`;

const emri = "Student"
const nota = 10.0;
const text4 = `Studenti me emrin ${emri} ka noten mesatare: ${nota}`;

console.log("String template: ", text4);

console.log(`Length of string ${emri}: `, emri.length)
// slice | substring

const ushtrime = "Ushtrimet ne Ueb 1";
console.log("Text: ", ushtrime);
console.log("Slice(7, 12): ", ushtrime.slice(7, 12));
console.log("Substring(7, 12): ", ushtrime.substring(7, 12));

// replace | replaceAll
const content = "Ushtrimet ne Programimin e orientuar ne objekte dhe Ushtrimet ne Ueb 1";
console.log(content);
console.log("replace: ", 
    content.replace("Ushtrimet", "Ligjeratat")
)
console.log("replace: ", 
    content.replaceAll("Ushtrimet", "Ligjeratat")
)

const firstText = "first"
const concatString = firstText.concat(text1, text2, text3);
console.log("concatString: ", concatString);
console.log("lowercase concatString: ", concatString.toLowerCase());
console.log("uppercase concatString: ", concatString.toUpperCase());

const trimText = "   text    ";
console.log(trimText);
console.log(trimText.trim()); // trimStart, trimEnd

const randomText = "4";
console.log("Pad: ", randomText.padEnd(4, "*")) // padStart


// content.charAt(0);

// content[0];

console.log("Content: ", content)
console.log("numri i fjaleve: ", content.split(' ').length)

// indexOf
console.log("Index of Programimi: ", content.indexOf("Programimi"));

console.log("Content includes 'POO'? ", content.includes("POO", 10));

content.startsWith('Programimi', 5); //?
content.endsWith("Ueb 1"); // ?












