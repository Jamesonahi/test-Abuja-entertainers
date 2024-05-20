const form = document.getElementById("user-form");
const formButton = document.getElementById("form-button");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const sheetAPI = "https://sheetdb.io/api/v1/nb8kv0htgvfan";

    formButton.disabled = true;

    fetch(sheetAPI, {
        method: "POST",
        body: formData
    })
    .then(() => alert("Form submission successful!"))
    .catch(() => alert("Form submission failed! Try again."))
    .finally(() => formButton.disabled = false)
})

// https://sheetdb.io/api/v1/nb8kv0htgvfan