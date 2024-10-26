const header = document.querySelectorAll('header')

function changeImage(imageSrc) {
 document.getElementById('displayedImage').src = imageSrc;
         }
         
// Select all links with the class 'nav-link'
const navLinks = document.querySelectorAll('.nav-link');

// Loop through each link and add a click event listener
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default action (for testing purposes)
        console.log(`Navigating to: ${link.getAttribute('href')}`);  // Log the link's href attribute
        
        // Perform any additional action here
        // For example, you could navigate to the link's href with JavaScript:
        // window.location.href = link.getAttribute('href');
    });
});

