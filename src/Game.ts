/**
 * 
 */
class Game{
   
  private _score:number=0;

  constructor(){


  }

  get score(){
    return  this._score
  }

  public roll(pins:number){

   this. _score+=pins
  }

}


export default Game;