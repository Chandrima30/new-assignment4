1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:getElementById() : Selects ONE element using its id.ex - document.getElementById("title");
getElementsByClassName(): Selects ALL elements having a specific class. ex- document.getElementsByClassName("card");
querySelector() : Selects the FIRST matching element using CSS selector. ex- document.querySelector("selector");
querySelectorAll():Selects ALL matching elements using CSS selector. ex - document.querySelectorAll(".card");
2. How do you create and insert a new element into the DOM?
Ans:Use createElement() to make an element, set its content, then use appendChild()  to add it to the DOM.
3. What is Event Bubbling? And how does it work?
Ans:Event Bubbling is a process where an event starts from the target element and then moves upward to its parent elements in the DOM.
ex - document.getElementById("child").addEventListener("click", () => {
  console.log("Button clicked");})
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation is a technique where you add one event listener to a parent element instead of adding listeners to multiple child elements.
Works for dynamically added elements
5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() stops the browser’s default action, while stopPropagation() stops the event from propagating to parent elements.
