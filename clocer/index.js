
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const errorMessage = document.getElementById("errorMessage");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            showError("Please enter a task.");
            return;
        }

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Add a checkbox to mark the task as complete
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed", checkbox.checked);
        });

        // Add a delete button to remove the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        // Append the checkbox and delete button to the list item
        li.prepend(checkbox);
        li.appendChild(deleteButton);

        // Add the list item to the task list
        taskList.appendChild(li);
        taskInput.value = "";
        clearError();
    }
    function showError(message) {
        errorMessage.textContent = message;
    }

    function clearError() {
        errorMessage.textContent = "";
    }
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    });
});



// JavaScript for Number Sorting Tool
document.addEventListener("DOMContentLoaded", () => {
    const numberInput = document.getElementById("numberInput");
    const sortOrder = document.getElementById("sortOrder");
    const sortButton = document.getElementById("sortButton");
    const errorMessage = document.getElementById("errorMessage");
    const sortedResult = document.getElementById("sortedResult");

    // Function to sort the numbers
    function sortNumbers() {
        const input = numberInput.value.trim();

        // Validate input
        if (!input) {
            showError("Please enter some numbers.");
            return;
        }

        const numberArray = input.split(",").map(num => num.trim());

        // Check if all inputs are valid numbers
        if (!numberArray.every(num => !isNaN(num) && num !== "")) {
            showError("Please enter valid numbers separated by commas.");
            return;
        }

        // Convert to numbers
        const parsedNumbers = numberArray.map(Number);

        // Sort the numbers based on the selected order
        parsedNumbers.sort((a, b) => {
            return sortOrder.value === "ascending" ? a - b : b - a;
        });

        // Display the sorted result
        sortedResult.textContent = `Sorted Numbers: ${parsedNumbers.join(", ")}`;
        clearError();
    }

    // Function to show error messages
    function showError(message) {
        errorMessage.textContent = message;
        sortedResult.textContent = "";
    }

    // Function to clear error messages
    function clearError() {
        errorMessage.textContent = "";
    }

    // Event listener for the "Sort" button
    sortButton.addEventListener("click", sortNumbers);
});


// JavaScript for toggling background color between white and black
document.addEventListener("DOMContentLoaded", () => {
    const changeColorButton = document.getElementById("changeColorButton");
    let isBlack = false;

    // Function to toggle the background color
    function toggleBackgroundColor() {
        document.body.style.backgroundColor = isBlack ? "white" : "black";
        isBlack = !isBlack;
    }

    // Event listener for the "Change Background Color" button
    changeColorButton.addEventListener("click", toggleBackgroundColor);
});


// JavaScript for Random Number Guessing Game
document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guessInput");
    const submitGuessButton = document.getElementById("submitGuessButton");
    const feedbackMessage = document.getElementById("feedbackMessage");
    const attemptsMessage = document.getElementById("attemptsMessage");

    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    // Function to check the user's guess
    function checkGuess() {
        const userGuess = parseInt(guessInput.value, 10);
        attempts++;

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedbackMessage.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        if (userGuess === randomNumber) {
            feedbackMessage.textContent = `Congratulations! You guessed the correct number (${randomNumber})!`;
            attemptsMessage.textContent = `You took ${attempts} attempt(s) to guess the correct number.`;
            guessInput.disabled = true;
            submitGuessButton.disabled = true;
        } else if (userGuess < randomNumber) {
            feedbackMessage.textContent = "Too low. Try again!";
            attemptsMessage.textContent = `Attempt: ${attempts}`;
        } else {
            feedbackMessage.textContent = "Too high. Try again!";
            attemptsMessage.textContent = `Attempt: ${attempts}`;
        }

        // Clear the input field for the next guess
        guessInput.value = "";
        guessInput.focus();
    }

    // Event listener for the "Submit Guess" button
    submitGuessButton.addEventListener("click", checkGuess);

    // Allow pressing "Enter" to submit the guess
    guessInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            checkGuess();
        }
    });
});

