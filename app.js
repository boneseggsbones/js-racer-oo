window.addEventListener( "load", initialize )

function initialize(){
    game = new Game()
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



function Game(){
    this.playerKeys = []
    this.clickCount = 0
}


Game.prototype = {
    bindEventListeners: function(){
        var numberPicker = document.getElementById( 'number-picker' )
        numberPicker.addEventListener( "submit", this.getNumberOfPlayers.bind(this) )

        var letterPicker = document.getElementsByClassName('letters')[0]
        letterPicker.addEventListener( "click",  this.addKeys.bind(this) ) 

        document.addEventListener( "keyup", this.updatePlayerPosition )
    },

    getNumberOfPlayers: function(e){
        e.preventDefault()
        this.numberOfPlayers = document.getElementById( 'chosen-number' ).value

        // var numOfPlayers = document.getElementById( 'chosen-number' ).value
    },


    addKeys: function(e){
        if (this.numberOfPlayers > this.clickCount){
            this.playerKeys.push(e.target.innerHTML)
            this.clickCount += 1
        }
        else {
            numberPicker.removeEventListener( "submit", this.getNumberOfPlayers.bind(this) )
        }
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
