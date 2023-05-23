

/**
 * 
 */
class Game{
   

  
  private _rolls:number[] = Array(21).fill(0)

  private currentRollIndex=0

  get score(){
   
   let score =0

   const FRAMES=10
   
   let frame_index=0

    for( let frame=0;frame<FRAMES;frame++){
       
        if(this.isSpare(frame_index)){
            
            score= 10+this._rolls[frame_index+2]
            frame_index+=2

          }
        else if(this.isStrike(frame_index)){
            score+=10
                    +this._rolls[frame_index+1]
                    +this._rolls[frame_index+2]

            frame_index++ 
        }
        else{

          score+= this._rolls[frame_index]+
                         this._rolls[frame_index+1]
           frame_index+=2
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



}


export default Game;