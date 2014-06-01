window.addEventListener( "load", initialize )

function initialize(){
    var view = new View()
    game = new Game( view )
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



function Game( view ){
    this.playerKeys = []
    this.clickCount = 0
    this.view = view
}


Game.prototype = {
    bindEventListeners: function(){
        var numberPicker = document.getElementById( 'number-picker' )
        var letterPicker = document.getElementsByClassName('letters')[0]
        
        numberPicker.addEventListener( "submit", this.getNumberOfPlayers.bind(this) )
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
            this.removeWelcomeListeners()
            this.view.hideWelcomeScreen()
        }
    },

    updatePlayerPosition: function(e){
        console.log(e)
    },

    removeWelcomeListeners: function(){
        var numberPicker = document.getElementById( 'number-picker' )
        var letterPicker = document.getElementsByClassName( 'letters' )[ 0 ]

        numberPicker.removeEventListener( "submit", this.getNumberOfPlayers.bind(this) )
        letterPicker.removeEventListener( "submit", this.getNumberOfPlayers.bind(this) )
    },



    checkForWinner: function(){},
    sendRenderInfo: function(){} 
}



function View(){}
View.prototype = {
    renderPlayer: function(){
        console.log( "render player" )
    },

    hideWelcomeScreen: function(){
        document.getElementById( 'number-picker' ).className = 'off'
        document.getElementsByClassName('letters')[0].className = 'off'
        
    }


}
