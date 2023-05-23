import Game from "../src/Game";

export const rollMany=(game:Game,rolls:number,pins:number)=>{
   
  for(let i=0;i<rolls;i++){
       game.roll(pins)
  }

}

export const isSpare=(score_1:number,score_2:number):Boolean=>{

  return score_1+score_2 ===10
}