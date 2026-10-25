const userProfile = {
    name: "Nurkadyr",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Football", "Music"]
};

function showProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;

    document.getElementById("nameText").textContent = userProfile.name;
    document.getElementById("yearText").textContent = userProfile.birthYear;
    document.getElementById("ageText").textContent = age;
    document.getElementById("developerText").textContent = userProfile.isDeveloper;
    document.getElementById("hobbyCountText").textContent = userProfile.hobbies.length;

    console.log("User Profile:", userProfile);
    console.log("Age:", age);
    console.log("Hobbies Count:", userProfile.hobbies.length);
}

showProfile();

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("username").value.trim();
    const year = Number(document.getElementById("birthYear").value);
    const currentYear = new Date().getFullYear();

    if (name === "" || year < 1900 || year > currentYear) {
        alert("Please enter a valid name and birth year.");
        return;
    }

    userProfile.name = name;
    userProfile.birthYear = year;
    showProfile();
});

const hobbyList = document.getElementById("hobbyList");
const hobbyInput = document.getElementById("hobbyInput");

const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");

addButton.addEventListener("click", function () {
    const hobby = hobbyInput.value.trim();

    if (hobby === "") {
        alert("Please enter a hobby.");
        return;
    }

    const newItem = document.createElement("li");
    newItem.textContent = hobby;
    hobbyList.appendChild(newItem);
    userProfile.hobbies.push(hobby);

    document.getElementById("hobbyCountText").textContent = userProfile.hobbies.length;
    hobbyInput.value = "";
});

removeButton.addEventListener("click", function () {
    if (hobbyList.lastElementChild) {
        hobbyList.lastElementChild.remove();
        userProfile.hobbies.pop();
        document.getElementById("hobbyCountText").textContent = userProfile.hobbies.length;
    }
});
