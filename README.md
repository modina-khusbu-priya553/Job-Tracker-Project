Answers to Questions


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   -  getElementById is for id, it's fast, no need to use # inside it and return only one element.
   -  getElementsByClassName is for class, returns Html collection because we can use same class in multiple tags.
   - querySelector is for all tag, id,class. it select the first matching element. We can use for each loop in it .
   - querySelectorAll can select all mathching elements, return NodeList.

2. How do you create and insert a new element into the DOM?.
   - first create the element by using createElement
   - set text into it by using innerText or innerHTML depend on what we want to create.
   - Find the parent for insert new element into it. And append the new child into it.
 
3. What is Event Bubbling? And how does it work?
   - Event Bubbling is a mechanism in JavaScript where an event starts from the target element and then bubbles upto parent untill it reaches the root.
   in html if an Event added like (click, hover) then it first runs on the target element, then propagates upward through its parent elements (button -> div -> body -> html -> document).

4. What is Event Delegation in JavaScript? Why is it useful?
   - Event Delegation in JavaScript is a technique where a single eventListener added to a parent can handle multiple child element. It reduce adding multiple event in child, we can handle every child of a     parent by adding a single event which help to get better performance. It makes code simpler and easier to maintain.

5. What is the difference between preventDefault() and stopPropagation() methods?
 - preventDefault() and stopPropagation() are methods used to control event behavior, but they do different things.
   
   preventDefault(): It stops the browser’s default action of an element.
Example: <a href="https://google.com">Go to Google</a>, here when we click the link it normaly open the google. If we add preventDefault() then it will stop to open the google page when we click the link.
 stopPropagation(): It stops the event from propagating (bubbling) to parent elements in the DOM. If we add stopPropagation() then the triger element will run but stop to propaget to it's parent.
