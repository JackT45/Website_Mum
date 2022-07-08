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