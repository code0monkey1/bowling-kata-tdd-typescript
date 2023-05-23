/**
 * 
 */
class Game{
   
  private _score:number=0;
  
  private _rolls:number[] = Array(21).fill(0)

  private currentRollIndex=0

  get score(){

   const FRAMES=10
   
   let CHANCE_INDEX=0

   const SPARE=10

    for( let frame=0;frame<FRAMES;frame++){
       
        if(this._rolls[CHANCE_INDEX]+this._rolls[CHANCE_INDEX+1]===SPARE){

          

        }
         
    }


    return this._score
     
  }

  public roll(pins:number){

   this._rolls[this.currentRollIndex++]=pins

  }

}


export default Game;