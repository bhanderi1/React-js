// Array of names
const namesArray = ["Ram", "Sita", "Ashiti", "Dev", "Amii", "Vishvaa"];

// Function to group names by their first character
function groupNamesByFirstCharacter(names) {
    const groupedNames = {};
    names.forEach(name => {
        const firstChar = name.charAt(0).toUpperCase();
        if (!groupedNames[firstChar]) {
            groupedNames[firstChar] = [];
        }
        groupedNames[firstChar].push(name);
    });
    return groupedNames;
}

// Function to group names by their length
function groupNamesByLength(names) {
    const groupedNames = {};
    names.forEach(name => {
        const length = name.length;
        if (!groupedNames[length]) {
            groupedNames[length] = [];
        }
        groupedNames[length].push(name);
    });
    return groupedNames;
}

// Function to create the table for names grouped by first character
function createFirstCharacterTable() {
    const groupedNames = groupNamesByFirstCharacter([...namesArray]);

    // Get table body
    let tbody = document.querySelector("#firstCharacterTable tbody");

    // Clear existing rows
    tbody.innerHTML = '';

    // Populate table with grouped names
    for (let char in groupedNames) {
        let row = document.createElement("tr");

        let charCell = document.createElement("td");
        charCell.textContent = char;
        row.appendChild(charCell);

        let namesCell = document.createElement("td");
        namesCell.textContent = groupedNames[char].join(", ");
        row.appendChild(namesCell);

        tbody.appendChild(row);
    }
}

// Function to create the table for names grouped by length
function createLengthTable() {
    const groupedNames = groupNamesByLength([...namesArray]);

    // Get table body
    let tbody = document.querySelector("#lengthTable tbody");

    // Clear existing rows
    tbody.innerHTML = '';

    // Populate table with grouped names
    for (let length in groupedNames) {
        let row = document.createElement("tr");

        let lengthCell = document.createElement("td");
        lengthCell.textContent = length;
        row.appendChild(lengthCell);

        let namesCell = document.createElement("td");
        namesCell.textContent = groupedNames[length].join(", ");
        row.appendChild(namesCell);

        tbody.appendChild(row);
    }
}

// Function to populate names from array to the list
function populateNames() {
    let nameList = document.getElementById("nameList");

    // Clear existing list items
    nameList.innerHTML = '';

    namesArray.forEach(function(name) {
        let listItem = document.createElement("li");
        listItem.textContent = name;

        let deleteButton = document.createElement("span");
        deleteButton.textContent = " X";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function() {
            let index = namesArray.indexOf(name);
            if (index > -1) {
                namesArray.splice(index, 1); 
                populateNames(); // Repopulate lists
                createFirstCharacterTable(); // Repopulate first character table
                createLengthTable(); // Repopulate length table
            }
        };

        listItem.appendChild(deleteButton);
        nameList.appendChild(listItem);
    });
}

// Function to add a name to the list and tables
function addName() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value.trim();

    if (name !== "") {
        namesArray.push(name); // Add name to array
        populateNames(); // Repopulate lists
        createFirstCharacterTable(); // Repopulate first character table
        createLengthTable(); // Repopulate length table

        nameInput.value = ""; // Clear the input field after adding
    }
}

// Call the function to populate names when the page loads
document.addEventListener("DOMContentLoaded", function() {
    populateNames();
    createFirstCharacterTable();
    createLengthTable();
});