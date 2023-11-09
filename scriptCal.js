let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('#inputBox').value = string;
        } else{
            string += e.target.innerHTML;
            document.querySelector('#inputBox').value = string;
        }
        });

});3
