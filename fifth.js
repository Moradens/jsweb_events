const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');

let attempts = 0;
const maxAttempts = 5;

submitGuess.addEventListener('click', () => {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Zadejte platné číslo mezi 1 a 100.';
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = `Gratuluju! Uhodli jste číslo ${randomNumber} správně.`;
        gameOver();
    } else if (guess < randomNumber) {
        message.textContent = 'Tip je příliš nízký. Zkuste znovu.';
    } else {
        message.textContent = 'Tip je příliš vysoký. Zkuste znovu.';
    }

    if (attempts === maxAttempts) {
        message.textContent = `Překročili jste maximální počet pokusů. Hledané číslo bylo ${randomNumber}. Konec hry.`;
        gameOver();
    }
});

function gameOver() {
    guessInput.disabled = true;
    submitGuess.disabled = true;
}