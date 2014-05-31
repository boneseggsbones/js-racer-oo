window.addEventListener( "load", initialize )

function initialize(){
    var game = new Game()
    game.bindEventListeners()

}



function Player( key ){
    this.key = key
    this.position = 0
    this.win = false
}

Player.prototype = {
    updatePosition: function(){
        this.position += 1
    }
}



function Game(){}


Game.prototype = {
    bindEventListeners: function(){
        var numberPicker = document.getElementById( 'number-picker' )

        document.addEventListener( "keyup", this.updatePlayerPosition )
        numberPicker.addEventListener( "submit", this.getNumberOfPlayers )

    },

    getNumberOfPlayers: function(e){
        e.preventDefault()
        var numOfPlayers = document.getElementById( 'chosen-number' ).value
        console.log( numOfPlayers )
    },
    

    updatePlayerPosition: function(e){
        console.log(e)
    },
    checkForWinner: function(){},
    sendRenderInfo: function(){} 
}



function View(){}
View.prototype = {
    renderPlayer: function(){
        console.log( "render player" )
    }
}
