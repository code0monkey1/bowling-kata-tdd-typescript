

/**
 * 
 */
class Game{
   
  private _score:number=0;
  
  private _rolls:number[] = Array(21).fill(0)

  private currentRollIndex=0

  get score(){

   const FRAMES=10
   
   let roll_index=0

    for( let frame=0;frame<FRAMES;frame++){
       
        if(this.isSpare(roll_index,roll_index+1)){
            
            
            this._score= 10+this._rolls[roll_index+2]
            roll_index+=2

          }
        else{

           this._score+= this._rolls[roll_index]+
                         this._rolls[roll_index+1]
           roll_index+=2
        }
         
    }

    return this._score
     
  }

    public roll(pins:number){

    this._rolls[this.currentRollIndex++]=pins

    }


     public  isSpare=(score_1:number,score_2:number):Boolean=>{

      return this._rolls[score_1]+this._rolls[score_2] ===10
    }

}


export default Game;