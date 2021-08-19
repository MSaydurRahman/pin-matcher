function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinString = pin + '';
    if (pinString.length == 5) {
        return pin;
    }
    else {
        // console.log('3 digit', pin)
        return getPin();
    }
}


function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

const buttons = document.getElementsByClassName('button')
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const number = event.target.innerText;
        const calcInput = document.getElementById('typed-numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }
        }
        else {
            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }
    })
}

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typednumbers = document.getElementById('typed-numbers').value;
    const successNotication = document.getElementById('notify-success');
    const failNotification = document.getElementById('notify-fail');
    if (pin == typednumbers) {

        successNotication.style.display = 'block'
        failNotification.style.display = 'none'
    }
    else {

        failNotification.style.display = 'block'
        successNotication.style.display = 'none'
    }
}




