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


// HOME PAGE TEXT ANIMATIONS
document.addEventListener('DOMContentLoaded', function () {
    const h1Text = document.querySelector('.index-home-content h1');
    const h3Text = document.querySelector('.index-home-content h3');
    const pText = document.querySelector('.index-home-content p');
    

    // Add the 'active' class to trigger the slide animation
    setTimeout(() => {
        h1Text.classList.add('active');
        h3Text.classList.add('active');
        pText.classList.add('active');
    }, 200); // Small delay to make it look more natural
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all sidebar links
    const scrollLinks = document.querySelectorAll('.scroll-sidebar a');
    
    // IntersectionObserver to track when a section is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const link = document.querySelector(`#link-${entry.target.id}`); // Find the corresponding sidebar link by id

            if (entry.isIntersecting) {
                // Add 'active' class to link when section is in view
                link.classList.add('active');
            } else {
                // Remove 'active' class when section is out of view
                link.classList.remove('active');
            }
        });
    }, {
        threshold: 0.5 // Adjust the threshold to detect when 50% of the section is visible
    });

    // Observe each section with class 'resume-section'
    document.querySelectorAll('.resume-section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling behavior (same as your previous code)
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Scroll to the target element smoothly
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });
});



// JavaScript to trigger fade-in when scrolling
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.scroll-in-view');
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
});


/* Trigger active class when DOM content is loaded */
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.resume-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('active');
        }, index * 300); // Delay each section by 300ms
    });
});


// Improved scroll-in-view detection with IntersectionObserver
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-in-view');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Observe all sections with class '.scroll-in-view'
    sections.forEach(section => observer.observe(section));
});

// Wait for the page to fully load
window.addEventListener('load', function () {
    const image = document.querySelector('.index-home-image');
    // Add 'pulsate' class immediately when the page is loaded
    
    
    // Get the typing element
    const typingText = document.querySelector('.typing');
    
    // Add an event listener for the end of the typing animation
    typingText.addEventListener('animationend', function() {
        // After typing is done, wait 5 seconds before starting the pulsating effect
        setTimeout(function() {
            // Add the pulsate class to the image after the delay
            image.classList.add('pulsate');
        }, 1); 
    });
});


  /*
  window.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typing'); // Element with typing animation
  const imageElement = document.querySelector('.index-home-image'); // The image that will pulsate

  // Add the pulsate effect after the typing animation (after 4 seconds)
  setTimeout(() => {
    imageElement.classList.add('pulsate'); // Start the pulsating effect
  }, 4000); // 3s typing animation + 1s delay
});

  */

// Select all project containers
const projectContainers = document.querySelectorAll('.project-container');

// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // When the element is in the viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add the 'visible' class to trigger the animation
      observer.unobserve(entry.target); // Stop observing the element after it's visible
    }
  });
}, {
  threshold: 0.5 // The threshold means that 50% of the element must be visible to trigger the animation
});

// Observe each project container
projectContainers.forEach(container => {
  observer.observe(container);
});

document.addEventListener('click', function(event) {
    // Create a new img element for the click effect
    const clickEffect = document.createElement('img');
    
    // Add the click-effect class to the new element
    clickEffect.classList.add('click-effect');
    
    // Set the source of the image (replace with the path to your PNG image)
    clickEffect.src = 'images/clicker.png'; // Replace with your image path
    
    // Set the size of the effect (adjust these to the image's natural size or your desired size)
    clickEffect.style.width = '50px'; // Adjust to your image size
    clickEffect.style.height = '50px'; // Adjust to your image size
    
    // Position the click effect at the mouse click location
    clickEffect.style.left = `${event.pageX - 25}px`; // Subtract half the width to center
    clickEffect.style.top = `${event.pageY - 25}px`; // Subtract half the height to center
    
    // Append the effect to the body (or a specific container you want)
    document.body.appendChild(clickEffect);
    
    // Remove the effect after the animation is done (0.5s)
    setTimeout(() => {
      clickEffect.remove();
    }, 500); // Match this duration with the animation duration
  });
