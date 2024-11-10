//NAVBAR BUTTON CLICKS
document.addEventListener('DOMContentLoaded', function() {
    // get the links element by its ID
    const resumeLink = document.getElementById('resumeLink');
    const aboutLink = document.getElementById('aboutLink');
    const logoLink = document.getElementById("logoLink");
    const projectsLink = document.getElementById('projectsLink');
    // add event listeners for the link clicks
    resumeLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "resume.html"; 
    });
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "index.html"; 
    });
    logoLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "index.html"; 
    });
    projectsLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "projects.html"; 
    });
});




