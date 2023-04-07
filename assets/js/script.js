// Display home section spans web, app and game function 

function displaySpans () {
    const web = document.getElementById('web');
    const app = document.getElementById('app');
    const game = document.getElementById('game');

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