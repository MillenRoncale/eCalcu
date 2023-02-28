const display = document.querySelector('#display');
const operButton = document.querySelectorAll('#oper');
const equalBtn = document.querySelector('#equal');
const btn = document.querySelectorAll('.btn');
const point = document.querySelector('.point');

const numbers = document.querySelectorAll('.numBtn');

const operation = [];
const operatorsArray = ['+', '-', '*', '/'];

const addToDisplay = (e) => {
    operation.push(e.target.value)
    display.innerText += e.target.value
    
}


// display
point.addEventListener('click', addToDisplay);
numbers.forEach(number => {number.addEventListener('click' , addToDisplay );})
operButton.forEach(operator => {operator.addEventListener( 'click' , addToDisplay );})


// equal button
equalBtn.addEventListener(
    'click',
    () => {
        let operatorIndex;
        let result;

        for( let operator of operatorsArray ) {
            const index = operation.indexOf(operator);
            if(index > -1) {
                operatorIndex = index;
                break;
            }
        }
        // [ 4, +, 8], operatorIndex = 1
        // leftNumber = 4 rightNumber = 8
        const left = operation.slice(0, operatorIndex);
        const right = operation.slice(operatorIndex + 1);
        const leftNumber = parseFloat ( left.join('') );
        const rightNumber = parseFloat ( right.join('') );
        const operator = operation[operatorIndex];

        switch(operator) {
            case '+':
                result = leftNumber + rightNumber;
                break;

            case '-':
                result = leftNumber - rightNumber;
                break;
            
            case '*':
                result = leftNumber * rightNumber;
                break;

            case '/':
                result = leftNumber / rightNumber;
                break;
        }

        display.innerText = result;
        operation.length = 0;
        operation.push
    }
)


// del buttons
const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener(
        'click',
        (e) => {
            switch (e.target.innerText) {
                case 'C':
                    display.innerText = '';
                    break;

                case '←':
                    display.innerText = display.innerText.slice(0, -1);
                    break;
            }
        }
    )
})
