// list all the string methods in js
//length()
let str = "saske uchiha";
console.log(str.length);

//toUppercase()
console.log(str.toUpperCase());

//toLowercase()
console.log(str.toLowerCase());

//trim()
str = "     saske uchiha     ";
console.log(str);
console.log(str.trim());

//split(separator, limit)
str = "Hi there i am jiraiya you can send me love letters later";
console.log(str.split(' '));

// indexOf(searchValue, fromIndex)
str = "saske_uchiha";
console.log(str.indexOf("uchiha"));

//substring(indexStart, indexEnd)
console.log(str.substring(0, 5));

//slice(beginIndex, endIndex)
console.log(str.slice(0, 5))

//replace(searchValue, newValue)
str = "saske uchiha saske uchiha saske uchiha";
console.log(str.replace('uchiha', 'itachi'));

//replaceAll(searchValue, newValue))
console.log(str.replaceAll('uchiha', 'itachi'));

//includes(searchString, position)
console.log(str.includes("uchiha"));

//startsWith(searchString, position)
console.log(str.startsWith('saske'));
console.log(str.startsWith('sakura'));

//endsWith(searchString, length)
console.log(str.endsWith('uchiha'));

//charAt(index)
console.log(str.charAt(10));

//charCodeAt(index)
console.log(str.charCodeAt(0));
console.log('A : '+'A'.charCodeAt(0));

//concat(str1, str2, ..., strN)
let str1 = 'saske';
let str2 = 'itachi';
let str3 = 'shisui';
console.log(str1.concat(" 😀 ",str2).concat(" 😘 ",str3));

//padStart(targetLength, padString)
console.log(str1.padStart(10,'.'))

//padEnd(targetLength, padString)
console.log(str1.padEnd(10,'.'))

//repeat(count)
console.log(str1.repeat(2));

//trimStart()
const st = "               saske";
console.log(st.trimStart());

//trimEnd()
const st2 = "saske                   ";
console.log(st2.trimEnd());

//search(regexp)
str = "saske uchiha";
console.log(str);
console.log(str.search('uchiha'));
//it returns first occurance index number so here it is 6

//match(regexp)
string1 = "The rain in SPAIN stays mainly in the plain";
console.log(string1.match(/ain/g)); 
// Outputs: ['ain', 'ain', 'ain']

//localeCompare(compareString, locales, options)
str1 = "a";
str2 = "a";
console.log(str1.localeCompare(str2));
// Outputs: -1

// valueOf()
str1 = new String("Hello, world!");
console.log(str1.valueOf());
// Outputs: 'Hello, world!'


//toString()
let num = 12345;
console.log(num.toString())
console.log(typeof num.toString())


//codePointAt(index)
const emoji = "😊";
console.log(emoji.codePointAt(0)); // Outputs: 128522
