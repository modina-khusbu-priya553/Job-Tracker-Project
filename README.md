1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   -  getElementById is for id, it's fast, no need to use # inside it and return only one element.
   -  getElementsByClassName is for class, returns Html collection because we can use same class in multiple tags.
   - querySelector is for all tag, id,class. it select the first matching element. We can use for each loop in it .
   - querySelectorAll can select all mathching elements, return NodeList.

2. How do you create and insert a new element into the DOM?.
   - first create the element by using createElemenyt
     const div = document.createElement("div");
   - set text into it by using innerText or innerHTML depend on what we want to create.
     div.innerHTML = "<h2>New Job</h2>";
   - Find the parent for insert new element into it. And append the new child into it.
     const company = document.querySelector('body');
     company.appendChild(div);

3. What is Event Bubbling? And how does it work?
 - An event starts from the deepest element and bubbles upto parent untill it t reaches the root.
