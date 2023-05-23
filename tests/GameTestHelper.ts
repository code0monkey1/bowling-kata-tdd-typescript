import Game from "../src/Game";

export const rollMany=(game:Game,rolls:number,pins:number)=>{
   
  for(let i=0;i<rolls;i++){
       game.roll(pins)
  }

}
