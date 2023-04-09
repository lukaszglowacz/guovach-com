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