import { emailValidation, noValidation } from  "./validation.js";
let submissions = [];
export function submit() {
    const title = document.getElementById("title").value;
    const name1 = document.getElementById("firstName").value;
    const name2 = document.getElementById("lastName").value;
    const genderEl = document.querySelector("input[name='gender']:checked");
    const gender = genderEl ? genderEl.value : '';
    const date = document.getElementById("dob").value;
    const mail = document.getElementById("email").value;
    const no = document.getElementById("mobile").value;
    const agree = document.getElementById("agree").checked;

    if (!agree) {
        alert("You must accept the terms in the license agreement to submit the form.");
        return;
    }

    if (!title || !name1 || !name2 || !gender || !date || !mail || !no) {
        alert("Please fill all the fields");
        return;
    }

    if (!emailValidation() || !noValidation()) {
        alert("Please correct validation errors before submitting.");
        return;
    }

    submissions.push({
        title,
        firstName: name1,
        lastName: name2,
        gender,
        dob: date,
        email: mail,
        mobile: no
    });

    clearForm();
    displayCards();
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.querySelectorAll("input[name='gender']").forEach(r => r.checked = false);
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("agree").checked = false;
    document.getElementById("mailError").innerText = "";
    document.getElementById("noError").innerText = "";
}

function displayCards() {
    const display = document.getElementById("card");
    display.innerHTML = "";

    submissions.forEach((entry, index) => {
        display.innerHTML += `
            <div style="border: 2px solid black; padding: 20px; margin: 10px 0; border-radius: 10px; background-color: rgb(255, 255, 255);">
                <h2 style="color: green;">Submitted Details #${index + 1}</h2>
                <p><strong>Title:</strong> ${entry.title}</p>
                <p><strong>First Name:</strong> ${entry.firstName}</p>
                <p><strong>Last Name:</strong> ${entry.lastName}</p>
                <p><strong>Gender:</strong> ${entry.gender}</p>
                <p><strong>Date of Birth:</strong> ${entry.dob}</p>
                <p><strong>Email:</strong> ${entry.email}</p>
                <p><strong>Mobile No:</strong> ${entry.mobile}</p>
            </div>
        `;
    });
}
