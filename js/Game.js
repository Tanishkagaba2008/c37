class Game{
    constructor(){}
    getState(){
    var gref=database.ref('gameState')
    gref.on("value",function(data){
    gameState=data.val(); 
    })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
    if(gameState===0){
        player=new Player()
        var playerCountref=await database.ref('playerCount').once("value")
        if(playerCountref.exists()){
            playerCount=playerCountref.val();
            player.getCount();
        }
        
        form=new Form()
        form.display();
    }
    }
    play(){
        form.hide();
        textSize(30);
        text("GAME START!",120,100)
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var displaypos=130;
            for(var plr in allPlayers){
                if(plr==="player"+player.index)
                fill("red")
                else 
                fill("black")
                displaypos+=20;
                textSize(20);
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,displaypos);

                
            }
        }
        if(keyDown(UP_ARROW)&& player.index!==null){
            player.distane+=50;
            player.update();
        }
    }
    }