document.getElementById("main").onsubmit = function() {
  if (document.getElementById("name").value == "") {
    alert("Name Field is required");
	return false;
  }
  if (document.getElementById("email").value == "") {
    alert("Email Field is required");
	return false;
  }
}