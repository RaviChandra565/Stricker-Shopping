// Alert Message
function showMessage() {
   alert("Welcome to my Portfolio!");
}


// Theme Change
function changeTheme() {


   document.body.classList.toggle("dark");


}


// Project Details
function projectInfo(projectName) {


   alert("You clicked on : " + projectName);


}


// Form Validation
function validateForm() {


   let name = document.getElementById("username").value;
   let email = document.getElementById("email").value;


   if(name == "" || email == "") {


       alert("Please fill all fields.");
       return false;


   }


   alert("Form Submitted Successfully!");
   return true;
}
