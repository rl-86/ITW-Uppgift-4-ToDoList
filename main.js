// JavaScript
console.log("main.js is loaded...");


//My HTML element variables
const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const button = document.querySelector("#addTodo");
const info = document.querySelector("small");
const completedInfo = document.querySelector("p");

//My JS variables
let completedCount = 0;
const todoArray = [];

// Function to handle change status on object in array
// Takes paraneter completed (bool)
function changeStatus(todoText, completed) {

    // Find index, look in objects and value on "name"
    let correctIndex = todoArray.map(t => t.name).indexOf(todoText);


    // Change status on the object at correct index
    todoArray[correctIndex].status = completed;

}

button.addEventListener("click", function () {

    //Fetch value from input
    const text = input.value;

    //Check if input is empty
    if (text.length == 0) {
        info.innerText = "Input must not be empty!";
        return;
    }
    else {
        info.innerText = "";
    }

    // Add todo to todoArray
    const todoObject = { name: text, status: false };
    todoArray.push(todoObject);

    // Create li element to ul
    const item = document.createElement("li");
    list.appendChild(item);

    // Create a span-element in our new li and add text
    const itemLabel = document.createElement("p");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    // Add listener to the span
    itemLabel.addEventListener("click", function () {

        // Toggle completed/uncompleted ToDo's
        if (item.getAttribute("class") == "completed") {

            item.setAttribute("class", "");

            // Change status on object in array to false
            let clickedText = item.firstChild.firstChild.textContent;
            changeStatus(clickedText, false);
            completedCount--
        }
        else {
            item.setAttribute("class", "completed");

            // Change status on object in array to true
            let clickedText = item.firstChild.firstChild.textContent;
            changeStatus(clickedText, true);
            completedCount++
        }

        completedInfo.innerText = `${completedCount} completed`;
    })

    //Empty input field
    input.value = "";

});
