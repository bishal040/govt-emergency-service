
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

1. getElementById("*") is used to get Unique DOM element.
   getElementByClassName("*") is used to get html collection that changes automatically if the live collection changes
   querySelector(".*") is used to get the first matching element
   querySelectorAll(".*") is used to get all matches items in a List.

2. How do you **create and insert a new element into the DOM**?

2. To create new element and insert it into DOM, we have to first create a element by using "document.createElement("div")". then we can add content as per need. After that for insertion we have to call appendChild(div) function.

3. What is **Event Bubbling** and how does it work?

3.Event Bubbling is something like when you call addevenListener() function in child element it bubbles up to the parents elements automatically.

4. What is **Event Delegation** in JavaScript? Why is it useful?

4.if the number of child is too much we can use event delegation where instead of call addEventListener function to every child we can call it to the parent and to use in the child class we can simply use event.target to ensure which child was clicked.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

5.preventDefault() function stops the default behavior of the browser.On the other hand, stopPropagation() function stop the event bubbling.
