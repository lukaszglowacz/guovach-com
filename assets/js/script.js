// Display home section spans web, app and game function 

function displaySpans () {
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
window.addEventListener('scroll', function() {
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
const creationWords = ['is Limitless: Unlocking Your Imagination',
    'is Power: Expressing Your Inner Vision', 'is Freedom: Embracing Your Artistic Spirit'];
writingEffect(creationText, creationWords);

const technologyText = document.getElementById('technologyText');
const technologyWords = ['helps unleash the potential of creativity', 
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

categories.forEach(category => {
    category.addEventListener('click', () => {
        // remove active class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
        // add active class to clicked category
        category.classList.add('active');
        
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