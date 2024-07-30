// Access the elements

const contentDiv = document.getElementById("content"); //Selects a single element by its id

const textParagraph = document.querySelector(".text"); //Selects the first element that matches a CSS selector

const changeTextButton = document.getElementById("changeText");

// Change the text content of the paragraph
textParagraph.textContent = "Hello, DOM!";

// Create a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";

// Append the new element to the content div
contentDiv.appendChild(newParagraph);

// Add an event listener to the button
changeTextButton.addEventListener("click", function () {
  textParagraph.textContent = "Text changed!"; //text will be changed when the button was clicked
});

//Document Object Model(DOM):it allows to users interact with and manipulate HTML and XML document dynamically

//key concept of DOM:

//The document object is the root of the DOM tree and provides access to the entire web page. It is the entry point for accessing and manipulating the content of the web page.

//The DOM represents the document as a hierarchical tree structure. The root of the tree is the document object, and it contains child nodes that represent the elements of the document.
