var buttons = document.getElementsByClassName('button');

function rows() {
    for (i = 0 ; i < buttons.length ; i++) {
        console.log(buttons[i].innerText);	
    }
}

