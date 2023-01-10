const display = document.querySelector('#display');
// const button = document.querySelector('button');

const buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener(
        'click',
        (e) => {
            switch(e.target.innerText){
                case 'C':
                    display.innerText = '';
                break;

                case '←':
                    display.innerText = display.innerText.slice(0, -1);
                break;

                case '=':
                    
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Syntax Error';
                }
                break;
                
                default:
                    display.innerText += e.target.innerText;
            }
        }
    )
})
