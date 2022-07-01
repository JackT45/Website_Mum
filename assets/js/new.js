const buttons = document.querySelectorAll('.button')

const aHover = document.querySelectorAll('#nav a:hover')

document.getElementById('green').onclick = green

document.getElementById('blue').onclick = blue

document.getElementById('red').onclick =  red

function green(){
    for (let i = 0; i < buttons.length; i ++) {
        buttons[i].style.background = 'rgba(108,182,134)'
    }
	document.querySelector('#logo').style.color = 'rgba(108,182,134)'	
}

function blue(){
	for (let i = 0; i < buttons.length; i ++) {
        buttons[i].style.background = 'rgba(61, 119, 169)'
    }
	document.querySelector('#logo').style.color = 'rgba(61, 119, 169)'
	
}

function red(){
	for (let i = 0; i < buttons.length; i ++) {
        buttons[i].style.background = 'rgba(92, 83, 144)'
    }
	document.querySelector('#logo').style.color = 'rgba(92, 83, 144)'
	
    
    // a:hover strong
}