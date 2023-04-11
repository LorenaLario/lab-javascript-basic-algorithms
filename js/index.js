// Iteration 1: Names and Input

let hacker1 = "Carmela";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Steisy";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} 
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} 
else {
    console.log(`Wow, you both have equally long names, ¡${hacker1.length} characters!`)
}

// Iteration 3: Loops
//for (let capitals of hacker1) {

let result = "";

for (let i = 0; i < hacker1.length; i++) {
    let capitals = hacker1[i].toUpperCase()
    result += capitals;
    if(i !== hacker1.length - 1) {
        result += " ";
    }
}

console.log(result);

let resultReverse = "";

for (let i = hacker2.length -1; i >= 0; i--) {
    resultReverse += hacker2[i] 
}

console.log(resultReverse)

let driverValue = 0;
let navigatorValue = 0;

for (let i = 0; i < hacker1.length; i++) {
    driverValue += hacker1.charCodeAt(i)
}

for (let i = 0; i < hacker2.length; i++) {
    navigatorValue += hacker2.charCodeAt(i)
}

if (driverValue < navigatorValue) {
    console.log("The driver's name goes first")
 }
 else if (driverValue > navigatorValue) {
    console.log("Yo, the navigator goes first definitely.")
 }
 else {
    console.log("What?! You both have the same name?")
 }

 //Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat a sapien 
et aliquet. Mauris a velit maximus lectus euismod varius sed sed nibh. Sed hendrerit fermentum ante sed facilisis. 
Duis tristique gravida lorem. Cras ac tortor eget odio finibus hendrerit at sed ligula. 
In tristique quam eget arcu scelerisque, non fermentum nulla efficitur. Sed et porta erat. 
Nulla ornare at turpis eu gravida. Praesent vestibulum risus vitae lacus semper gravida. 
Pellentesque sodales libero et nibh bibendum, ac tincidunt nibh interdum. Donec pellentesque tristique lorem at sodales. 
Sed tincidunt arcu at commodo egestas. Cras bibendum sollicitudin sodales. Proin at facilisis est. 
Pellentesque eu dolor non eros molestie tincidunt commodo ac felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
Integer nec mollis eros, sed pulvinar odio. Sed sed magna vel magna accumsan vestibulum at ac justo. 
Cras in rhoncus urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla lobortis lorem ut justo varius interdum sed at quam.
Quisque malesuada augue purus, sit amet tempor dolor varius non. Cras at tempus est. Phasellus egestas, mauris quis congue aliquet, 
est tellus interdum orci, eget vehicula sapien lorem sed metus. Ut quam felis, suscipit eu pellentesque at, bibendum vitae augue. 
Aenean ut cursus elit. Nam semper dui id hendrerit suscipit. Duis sed lacus hendrerit, accumsan magna a, dapibus ante. Ut et lectus metus. 
Praesent scelerisque orci quis leo porta blandit. Integer porttitor orci ultricies quam pellentesque placerat. 
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu mi eu eros gravida elementum.
Proin finibus nec tortor vitae tempus. Nulla facilisi. Maecenas venenatis placerat turpis quis volutpat.`

let wordLongText = 1;
let countTwoChar = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        wordLongText++
    }
    if (longText[i] + longText[i + 1] === "et") {
        countTwoChar++
    }
}

console.log(wordLongText);
console.log(countTwoChar)
