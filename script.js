//NAVBAR BUTTON CLICKS
document.addEventListener('DOMContentLoaded', function() {
    // get the links element by its ID
    const resumeLink = document.getElementById('resumeLink');
    const aboutLink = document.getElementById('aboutLink');
    const logoLink = document.getElementById("logoLink");
    const projectsLink = document.getElementById('projectsLink');
    // add event listeners for the link clicks
    //animation before each?
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

//SCROLL FUNCTION ON RESUME PAGE
const scrollLinks = document.querySelectorAll('.scroll-sidebar a');

// smooth scroll behavior 
scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        // scroll to the target element smoothly (anchor links)
        window.scrollTo({
            top: targetElement.offsetTop - 80, // for the header height
            behavior: 'smooth'
        });
    });
});




