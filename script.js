let btn = document.querySelector("button");
//this line selects the first button element in the docuement ans assigns it to the variable 'btn'.
let ul = document.querySelector("ul");
//this line selects the first ul element in the docuement ans assigns it to the variable 'ul'.
let inp = document.querySelector("input");
//this line selects the first input element in the docuement ans assigns it to the variable 'inp'.

btn.addEventListener("click",function(){//this line adds aan evenet listner to the"btn" . it listens for a "click" evenet and executes the provided function when the button is clicked.
   let item = document.createElement("li");// this line creates a new list item (li),element and assigns it to the variable "item"
   item.innerText =inp.value;//This lines sets the text content of the newly created list item (item) to the current value of the input field('input.value')
   let delBtn = document.createElement("button");  //These lines create a new <button> element (delBtn), set its text content to "delete", and add a CSS class "delete" to it. This button will serve as the delete button for each task.
   delBtn.innerText ="delete";
   delBtn.classList.add("delete");
   item.appendChild(delBtn);  //This line appends the delete button (delBtn) to the list item (item). So, each task will have a delete button associated with it.
   ul.appendChild(item);   //This line appends the newly created list item (item), along with its delete button, to the <ul> element. It adds the task to the list.
   inp.value =""    //This part of the code resets the value of the input field (inp.value) to an empty string after adding the task. It clears the input field, so you can easily enter a new task.
});

ul.addEventListener("click",function(event){   //This line adds another event listener, this time to the <ul> element. It listens for a "click" event within the <ul>.
   if (event.target.nodeName == "BUTTON"){   //This line checks if the clicked element (event.target) is a <button>. If it is, it proceeds with the following actions.
      let listItem = event.target.parentElement; //This line gets the parent element of the clicked button, which is the <li> element containing the task and the delete button. It assigns this element to the variable listItem.
      listItem.remove();  //This part of the code removes the entire <li> element (task and delete button) from the DOM when the delete button is clicked. It effectively deletes the corresponding task from the list.
   }

   
});