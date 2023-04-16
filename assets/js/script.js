// Display home section spans web, app and game function 

function displaySpans() {
    let web = document.getElementById('web');
    let app = document.getElementById('app');
    let game = document.getElementById('game');

    web.style.display = 'inline';
    app.style.display = 'none';
    game.style.display = 'none';

    setTimeout(() => {
        web.style.display = 'none';
        app.style.display = 'inline';
        game.style.display = 'none';

        setTimeout(() => {
            web.style.display = 'none';
            app.style.display = 'none';
            game.style.display = 'inline';

            setTimeout(displaySpans, 1000);
        }, 1000);
    }, 1000);
}

// Call the function
displaySpans();

// Add loading text to the beginning of the page and activate it when page is not loaded yet
document.onreadystatechange = function () {
    const loadingButton = document.getElementById('loadingButton');
    const overlay = document.getElementById('overlay')

    if (document.readyState === 'loading') {
        // Show the loading button while page is loading
        loadingButton.style.display = 'block';
        overlay.style.display = 'block';
    } else if (document.readyState === 'complete') {
        // Hide the loading button when page has laded
        loadingButton.style.display = 'none';
        overlay.style.display = 'none';
    }
};

// Add navbar opacity on scroll function

// Get the header element
const header = document.querySelector('header');

// When the user scrolls
window.addEventListener('scroll', function () {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // If the scroll position is at the top of the page
    if (scrollPosition === 0) {
        header.style.opacity = 1;
    } else {
        header.style.opacity = 0.9;
    }
});

// Writing effect animation with blinking line
const doText = document.getElementById('doText');
const doWords = ['websites', 'software', 'games'];
writingEffect(doText, doWords);

const creationText = document.getElementById('creationText');
const creationWords = ['is unlocking imagination',
    'is expressing inner vision', 'is embracing artistic spirit'];
writingEffect(creationText, creationWords);

const technologyText = document.getElementById('technologyText');
const technologyWords = ['helps unleash the potential of creation',
    'simplifies life', 'is constantly changing'];
writingEffect(technologyText, technologyWords);

const projectsText = document.getElementById('projectsText');
const projectsWords = ["are a programmer's business card",
    "reflect a programmer's expertise", 'require documentation'];
writingEffect(projectsText, projectsWords);

function writingEffect(element, words) {
    let wordIndex = 0;
    let letterIndex = 0;
    let isBackspacing = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentLetter = currentWord[letterIndex];

        if (isBackspacing) {
            element.textContent = currentWord.slice(0, letterIndex);
            letterIndex--;

            if (letterIndex < 0) {
                isBackspacing = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, 100);
            }
        } else {
            if (currentLetter !== undefined) {
                element.textContent += currentLetter;
            }
            letterIndex++;

            if (letterIndex === currentWord.length) {
                isBackspacing = true;
                setTimeout(type, 1000);
            } else {
                setTimeout(type, 200);
            }
        }
    }

    type();
}

//   Skillset section and show category function
const btnsCategory = document.querySelectorAll('.btn-category');
const images = document.querySelectorAll('.images img');

// show all images by default
images.forEach(img => {
    img.style.display = 'inline-block';
});

// Add event listener to each button
btnsCategory.forEach(btn => {
    btn.addEventListener('click', () => {
        // get category
        const category = btn.getAttribute('data-category');

        // change font weight of active button
        btnsCategory.forEach(btn => {
            btn.style.fontWeight = 'normal';
        });
        btn.style.fontWeight = '600';

        // show images that match the category or show all images
        images.forEach(img => {
            if (category === 'all' || img.getAttribute('data-category').includes(category)) {
                img.style.display = 'inline-block';
            } else {
                img.style.display = 'none';
            }
        });
    });
});

// simulate a click on the "All" button to show all images by default
document.querySelector('.btn-category[data-category="all"]').click();

// Project category slider

const categories = document.querySelectorAll('.projects-btn-category');
const projects = document.querySelectorAll('.project');

// show all projects by default
projects.forEach(project => {
    project.style.display = 'block';
});

// Add eventlistener
categories.forEach(category => {
    category.addEventListener('click', () => {
        // remove active class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
        // add active class to clicked category
        category.classList.add('active');

        // change font weight of active category
        categories.forEach(cat => {
            cat.style.fontWeight = 'normal';
        });
        category.style.fontWeight = '600';

        const categoryValue = category.getAttribute('data-category');

        projects.forEach(project => {
            const projectCategory = project.getAttribute('data-category');

            if (categoryValue === 'all' || categoryValue === projectCategory) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// simulate a click on the "All" button to show all images by default
document.querySelector('.projects-btn-category[data-category="all"]').click();

// Form element synchronized with Google Sheets document via Google Apps Script
window.addEventListener("load", function () {
    const form = document.getElementById('form');
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const action = e.target.action;
        fetch(action, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                // Clear input fields
                form.reset();
                // Display overlay and thank-you-message
                const overlay = document.querySelector('.overlay');
                overlay.style.display = 'block';
                const thankYouMessage = document.querySelector('.thank-you-message');
                thankYouMessage.style.display = 'flex';
            })
    });
});



//   Close thank you screen after registering form button
function handleCloseButtonClick() {
    const loadingButton = document.getElementById('tuMessage');
    const overlay = document.getElementById('overlay');

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
        loadingButton.style.display = 'none';
        overlay.style.display = 'none';
    });
}

handleCloseButtonClick();

//   When user sroll page navbar list become active on section user actually is
function setActiveNavItem() {
    const navItems = document.querySelectorAll('.nav-item');
    let activeItem = navItems[0]; // Set the first item as the active item

    // Listen for the scroll event
    window.addEventListener('scroll', () => {
        // Get the current scroll position
        const scrollPos = window.scrollY;

        // Check each section's position to see which one is currently in view
        navItems.forEach(item => {
            const sectionId = item.getAttribute('data-section-id');
            const section = document.getElementById(sectionId);
            const sectionPos = section.getBoundingClientRect().top + scrollPos;

            if (scrollPos >= sectionPos && scrollPos < sectionPos + section.offsetHeight) {
                // Add the active class to the corresponding navigation item
                if (item !== activeItem) {
                    activeItem.classList.remove('active');
                    item.classList.add('active');
                    activeItem = item;
                }
            }
        });
    });
}

setActiveNavItem();

// Change github icon on black project area
let img = document.getElementById('toChange');
img.setAttribute('src', 'assets/images/skillset/github-white.svg');

// Menu changer unorded navi list and change icons
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('exitBtn');
const navLink = document.querySelector('.nav-link');

menuBtn.addEventListener('click', () => {
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
    navLink.classList.add('roll-down')
    navLink.classList.remove('roll-up')
    navLink.style.display = 'block';

});

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'flex';
    navLink.classList.remove('roll-down')
    navLink.classList.add('roll-up')
    // Listen for the animationend event
    navLink.addEventListener('animationend', () => {
        navLink.style.display = 'none';
    }, { once: true }); // Remove the event listener after it's been called once
});

// When user click links in ul menu disappear and closeBtn change into the
const navLinks = document.querySelectorAll('.nav-link li');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Toggle the display of the nav-link and closeBtn elements
        const navLink = document.querySelector('.nav-link');
        const closeBtn = document.getElementById('exitBtn');
        navLink.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'flex';
    });
});


// Sub-navbar appear when user scroll down
// Get the height of the main navbar
var mainNavbarHeight = document.querySelector('.nav-link').offsetHeight;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Get the current scroll position of the page
  var scrollPosition = window.scrollY;
  
  // If the user has scrolled past the height of the main navbar, show the sub navbar
  if (scrollPosition > mainNavbarHeight) {
    document.querySelector('.sub-navbar').style.display = 'flex';
  } else {
    // Otherwise, hide the sub navbar
    document.querySelector('.sub-navbar').style.display = 'none';
  }
});
