

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

    for( let frame=0;frame<FRAMES;frame++){
       
        if(this.isSpare(CHANCE_INDEX,CHANCE_INDEX+1)){
           
            this._score= 10+this._rolls[CHANCE_INDEX+2]
            CHANCE_INDEX+=2

          }
        else{

           this._score+= this._rolls[CHANCE_INDEX]+
                         this._rolls[CHANCE_INDEX+1]
           CHANCE_INDEX+=2
        }
         
    }


    return this._score
     
  }

    public roll(pins:number){

    this._rolls[this.currentRollIndex++]=pins

    }


     public  isSpare=(score_1:number,score_2:number):Boolean=>{

      return score_1+score_2 ===10
    }

}


export default Game;