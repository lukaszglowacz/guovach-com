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