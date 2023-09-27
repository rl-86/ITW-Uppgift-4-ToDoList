// JavaScript
console.log("main.js is loaded...");


//My HTML element variables
const input = document.querySelector("#todoInput");
const list = document.querySelector("ul");
const button = document.querySelector("#addTodo");
const info = document.querySelector("small");
const completedInfo = document.querySelector("p");


let completedCount = 0;

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
            completedCount--
        }
        else {
            item.setAttribute("class", "completed");
            completedCount++
        }

        completedInfo.innerText = `${completedCount} completed`;
    })

    //Empty input field
    input.value = "";

});
