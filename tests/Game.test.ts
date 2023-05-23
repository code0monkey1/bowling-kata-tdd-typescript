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
      
      const game = new Game()
     
      
      rollMany(game,10,0)
     

      expect(game.score).toBe(0)


   })

})