function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var memberBtn = document.getElementById("memberBtn");
  var skillsBtn = document.getElementById("skillsBtn");
  var projectsBtn = document.getElementById("projectsBtn");
  var contactBtn = document.getElementById("contactBtn");
  member.style.display = "block";
  skills.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  memberBtn.style.backgroundColor = "#4CAF50";
  skillsBtn.style.backgroundColor = "#333";
  projectsBtn.style.backgroundColor = "#333";
  contactBtn.style.backgroundColor = "#333";
}