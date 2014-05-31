window.addEventListener( "load", initialize )

function initialize(){
    console.log( "meow" )
}



function Car( key ){
    this.key = key
    this.position = 0
    this.win = false
}

Car.prototype = {
    updatePosition: function(){
        this.position += 1
    }
}



function Controller(){}


Controller.prototype = {
    bindEventListeners: function(){},
    updateCarPosition: function(){},
    checkForWinner: function(){},
    sendRenderInfo: function(){} 
}



function View(){}

View.prototype = {
    renderCar: function(){
        console.log( "render car" )
    }
}


