// FAKE CHAT BOX RESPONSE
function sendChat() {
    let input = document.getElementById("chatInput").value;
    let response = document.getElementById("chatResponse");

    response.innerText = "Searching for: " + input;
}

// SIMPLE AUTOCOMPLETE MOCK
let doctors = ["Cardiologist", "Dermatologist", "Pediatrics", "Neurology"];

document.getElementById("doctorSearch").addEventListener("input", function () {
    let list = document.getElementById("suggestions");
    list.innerHTML = "";

    doctors.forEach(doc => {
        if (doc.toLowerCase().includes(this.value.toLowerCase())) {
            let li = document.createElement("li");
            li.innerText = doc;
            list.appendChild(li);
        }
    });
});