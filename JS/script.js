let enrollButton = document.querySelector(".enroll-btn");
let enrolledMsg = document.querySelector(".enrolled-msg");

enrollButton.addEventListener("click", (event) => {
  event.preventDefault();

  let name = document.querySelector("#name").value;
  let phone = document.querySelector("#phone").value;
  let email = document.querySelector("#email").value;
  let course = document.querySelector("#course").value;

  let showMsg = true;

  if (name === "" || phone === "" || email === "" || course === "") {
    alert("Please fill in all the fields before submitting the form.");
    showMsg = false;
  }

  if (showMsg) {
    enrolledMsg.innerText = `Thank you for enrolling! We'll get in touch with you soon.`;
    enrolledMsg.style.display = "block";
  }
});


