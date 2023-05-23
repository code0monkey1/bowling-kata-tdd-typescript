

/**
 * 
 */
class Game{
   
  private _rolls:number[] = Array(21).fill(0)

  private currentRoll=0

  get score(){
   
   let score =0

   const FRAMES=10
   
   let i=0

    for( let frame=0;frame<FRAMES;frame++){
       
        if(this.isSpare(i,i+1)){
            
            score= 10+this._rolls[i+2]
            i+=2

          }
        else{

          score+= this._rolls[i]+
                         this._rolls[i+1]
           i+=2
        }
         
    }

    return score
     
  }

    public roll(pins:number){

      this._rolls[this.currentRoll++]=pins

    }


     public  isSpare=(score_1:number,score_2:number):Boolean=>{

      return this._rolls[score_1]+this._rolls[score_2] ===10
    }

}


export default Game;