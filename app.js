window.addEventListener("load", initialize)

function initialize(){
    console.log("meow")
}


function View(){}

View.prototype = {
    renderCar = function(){
        console.log("render car")
    }
}