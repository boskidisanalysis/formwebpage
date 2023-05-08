function submitForm() {
    // Get the form data
    const form = document.getElementById("myForm");
    const formData = new FormData(form);
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);
  
    // Convert form data to JSON object
    const jsonData = JSON.stringify(formObject);
  
    // Save JSON data to file
    const filename = "form-data.json";
    const blob = new Blob([jsonData], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

// function submitForm() {
//   const gender = document.getElementById("gender").value;
//   const name = document.getElementById("name").value;
//   const surname = document.getElementById("surname").value;
//   const dob = document.getElementById("dob").value;
//   const education = document.getElementById("education").value;

//   const formData = {
//     gender: gender,
//     name: name,
//     surname: surname,
//     dob: dob,
//     education: education
//   };

//   // Convert the form data to a JSON string
//   const jsonData = JSON.stringify(formData);

//   // Save the JSON data to localStorage
//   localStorage.setItem("formData", jsonData);

//   // Show a success message
//   alert("Form submitted successfully!");
// }

// const jsonData = localStorage.getItem("formData");
// const formData = JSON.parse(jsonData);

// console.log(formData.gender);
// console.log(formData.name);
// console.log(formData.surname);
// console.log(formData.dob);
// console.log(formData.education);
