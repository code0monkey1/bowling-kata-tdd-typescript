import Game from "../src/Game"
import { rollMany } from "./GameTestHelper"

describe('Bowling Game',()=>{
   
  test('Game should exist',()=>{
       
        //Arrange
        const sut = new Game()

        //Act


        //Assert

        expect(sut).toBeInstanceOf(Game)
  })
   test("should score zero for a gutter game",()=>{
      
      const sut = new Game()
     
      for (let i=0;i<20;i++){
         sut.roll(0);
      }
      // rollMany(game,10,0)
     

      expect(sut.score).toBe(0)


   })

})