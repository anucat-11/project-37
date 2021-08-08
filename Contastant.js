class Contastant{
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contastantCountRef = database.ref('constantCount');
      contastantCountRef.on("value",(data)=>{
        contastantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contastantCount: count
      });
    }
  
    update(){
      var contastantInfoRef = "players/player" + this.index;
      database.ref(contastantInfoRef).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var contastantInfoRef = database.ref('players');
      contastantInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  