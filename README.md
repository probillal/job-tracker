1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   Ans: getElementById- returns only one element, searches by Id
   getElementsByClassName- As the same class return by more elements, give html collection like an array but not an array.
   querySelector()- retuen by first matching element, used css secector.
   querySelectorAll()= return all matching element, giving nodeList.

2. How do you create and insert a new element into the DOM?
   
  Ans: There are three steep create and insert a new element into a DOM.
      i. Create a new element
         const newDiv = document.createElement("div");

    ii. Adding content/ attribute
         newDiv.textContent = "Hello World";

     iii. Insert in a DOM
           document.body.append(newDiv);

3. What is Event Bubbling? And how does it work?
   
   Ans: Event Bubbling is a process where, when an event occurs on a child element (such as a click), that event progressively propagates up through its parent elements.
        Parent → Grandparent → document → window

4. What is Event Delegation in JavaScript? Why is it useful?
   
   Ans: Event Delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements using event bubbling.
         1. Good Performance
         2. Dynamic element support
         3. Clean & maintainable code
   
5. What is the difference between preventDefault() and stopPropagation() methods?
   
   Ans: preventDefault() - Stop default behavior in a browser.
       stopPropagation() - Stop the event from going up to parent elements.
   

   
