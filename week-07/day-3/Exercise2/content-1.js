'use strict';
// 1. Alert the content of the heading.
var heading = document.querySelector('h1');
alert(heading.innerHTML);
// 2. Write the content of the first paragraph to the console.
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0]);
// 3. Alert the content of the second paragraph.
console.log(paragraphs[1]);
// 4. Replace the heading's content with 'New content'.
heading.innerText = 'New content';
// 5. Replace the last paragraph's content with the first paragraph's content.
paragraphs[2].innerText = paragraphs[0].innerText;