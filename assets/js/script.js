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

// Home-2 section writing effect animation with blinking line

const doText = document.getElementById('doText');
doText.textContent = '';
const words = ['websites', 'software', 'games'];
let wordIndex = 0;
let letterIndex = 0;
let isBackspacing = false;

function writingEffect() {
    const currentWord = words[wordIndex];
    const currentLetter = currentWord[letterIndex];


    if (isBackspacing) {
        doText.textContent = currentWord.slice(0, letterIndex);
        letterIndex--;

        if (letterIndex < 0) {
            isBackspacing = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(writingEffect, 500);
        } else {
            setTimeout(writingEffect, 100);
        }
    } else {
        if (currentLetter !== undefined) {
            doText.textContent += currentLetter;
        }
        letterIndex++;

        if (letterIndex === currentWord.length) {
            isBackspacing = true;
            setTimeout(writingEffect, 1000);
        } else {
            setTimeout(writingEffect, 200);
        }
    }
}

// Start typing
writingEffect();


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