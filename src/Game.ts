

/**
 * 
 */
class Game{
  
  private _rolls:number[] = Array(21).fill(0)

  private currentRollIndex=0

  get score(){
   
   let score =0

   const FRAMES=10
   
   let roll_index=0

    for( let frame=0;frame<FRAMES;frame++){
       
        if(this.isSpare(roll_index)){
            
            score= 10+this.spareBonus(roll_index)
            roll_index+=2

          }
        else if(this.isStrike(roll_index)){
            score+=10+this.strikeBonus(roll_index)
            roll_index++ 
        }
        else{

          score+= this._rolls[roll_index]+
                         this._rolls[roll_index+1]
           roll_index+=2
        }
         
    }

    return score
     
  }

    public roll(pins:number){

    this._rolls[this.currentRollIndex++]=pins

    }


     private  isSpare=(frameIndex:number):Boolean=>{

      return this._rolls[frameIndex]+this._rolls[frameIndex+1] ===10
    }

    private isStrike=(frameIndex:number):Boolean=>{

        return this._rolls[frameIndex]===10
    }

    private strikeBonus=(frameIndex:number):number=>{

        return this._rolls[frameIndex+1]
               +this._rolls[frameIndex+2]
    }
   
    private spareBonus=(frameIndex:number):number=>{
      return this._rolls[frameIndex+2]
    }


}


export default Game;