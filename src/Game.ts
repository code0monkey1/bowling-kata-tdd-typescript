/**
 * 
 */
class Game{
   
  private _score:number=0;
  
  private _rolls:number[] = Array(21).fill(0)

  private currentRollIndex=0

  get score(){
     
    const FRAMES = 10
    let ROLL_INDEX=0

    while(ROLL_INDEX<FRAMES){
        
       if(this._rolls[ROLL_INDEX]+this._rolls[ROLL_INDEX+1]===10){
          this._score+=10+this._rolls[ROLL_INDEX+2]
       }
       else{
        this._score+=this._rolls[ROLL_INDEX]+this._rolls[ROLL_INDEX+1]
       }

       ROLL_INDEX+=2
        
    }

    return this._score
     
  }

  public roll(pins:number){

   this._rolls[this.currentRollIndex++]=pins

  }

}


export default Game;