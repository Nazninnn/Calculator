
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.buttons');

    let currentInput = '';
    let shouldResetDisplay = false;

    buttons.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const btn = e.target;
            const value = btn.dataset.value;

            if (value === 'C') {
                currentInput = '';
                display.textContent = '0';
                return;
            }

            if (value === '<') {
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput || '0';
                return;
            }

            if (value === '=') {
                try {
                    const result = eval(currentInput);
                    display.textContent = result;
                    currentInput = result.toString();
                    shouldResetDisplay = true;
                } catch (error) {
                    display.textContent = 'Error';
                    currentInput = '';
                }
                return;
            }

            if (shouldResetDisplay) {
                currentInput = '';
                shouldResetDisplay = false;
            }

            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
