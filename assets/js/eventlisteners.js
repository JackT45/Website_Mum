const egg = document.getElementById('egg')
const bottle = document.getElementById('bottle')
const pom = document.getElementById('pom')
egg.onmouseover = function(){return changeImageIn('images/Egg_Before.jpg', egg)}
egg.onmouseout = function(){return changeImageOut('images/Egg_After.jpg', egg)}
bottle.onmouseover = function(){return changeImageIn('images/Bottle_Full.jpg', bottle)}
bottle.onmouseleave = function(){return changeImageOut('images/Bottle_Empty.jpg', bottle)}
pom.onmouseover = function(){return changeImageIn('images/Pom_Zoom.jpg', pom)}
pom.onmouseleave = function(){return changeImageOut('images/Pom_Full.jpg', pom)}

function changeImageIn(source, select){
    select.src = source
}

function changeImageOut(source, select){
    select.src = source
}

const products= document.querySelectorAll('.product-img')

document.getElementById('scroll-left').addEventListener('click', scrollLeft)

document.getElementById('scroll-right').addEventListener('click', scrollRight)

const images = ["images/Bottle_Empty.jpg", "images/Egg_After.jpg", "images/Pom_Full.jpg"]

let i = 0;

function scrollLeft(){
    if (i == 0){
        i = 2
    } else {
        i --
    }
    products[0].src = images[i]
    setTimeout(function(){products[1].src = images[i]}, 150)
    setTimeout(function(){products[2].src = images[i]}, 300)
    setTimeout(function(){products[3].src = images[i]}, 450)
}
function scrollRight(){
    if (i == 2){
        i = 0
    } else{
        i ++
    }
    products[3].src = images[i]
    setTimeout(function(){products[2].src = images[i]}, 150)
    setTimeout(function(){products[1].src = images[i]}, 300)
    setTimeout(function(){products[0].src = images[i]}, 450)
}