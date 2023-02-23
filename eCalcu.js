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

point.addEventListener('click', addToDisplay);
numbers.forEach(number => {number.addEventListener('click' , addToDisplay );})
operButton.forEach(operator => {operator.addEventListener( 'click' , addToDisplay );})


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


// 

// equalBtn.addEventListener(
//     'click',
//     () => {
//         let operIn;
//         let result;

//         for(
//             let operator of operatorsArray
//         ) {
//             const index = operation.indexOf(operator);
//             if(index > -1){
//                 operIn = index;
//                 break;
//             }
//         }

//         const left = operation.slice(0, operIn); // [4, 5, 1] , 451
//         const right = operation.slice(operIn + 1); // [9, 9] , 99
//         const leftNumber = parseFloat( left.join('') ); // Number 451
//         const rightNumber = parseFloat( right.join('') ); // Number 99
//         const operator = operation[operIn]; // -

//         switch(operator) {
//             case '+':
//                 result = leftNumber + rightNumber;
//                 break;

//             case '-':
//                 result = leftNumber - rightNumber;
//                 break;
                
//             case '*':
//                 result = leftNumber * rightNumber;
//                 break;
                
//             case '/':
//                 result = leftNumber / rightNumber;
//                 break;
                
//         }

//         display.innerText = result;
//         operation.length = 0;
//         operation.push(result);
//     }
// )