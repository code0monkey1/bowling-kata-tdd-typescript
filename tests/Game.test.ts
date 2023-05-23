import Game from "../src/Game";
import { rollMany } from "./GameTestHelper";

describe('Bowling Game',()=>{
   
  let game:Game=new Game;
  
  beforeEach(()=>{

    game= new Game()

  })
  test('Game should exist',()=>{
       
        //Arrange
        const sut = game

        //Act


        //Assert

        expect(sut).toBeInstanceOf(Game)
  })
   test("should score zero for a gutter game",()=>{
      
      const sut = game
     
      rollMany(game,20,0)
     

      expect(sut.score).toBe(0)

   })

   test(" should score 20 for a set all ones ",()=>{

        // Arrange 
         const sut= game

        // Act
        rollMany(sut,20,1)
       
        // Assert
        expect(sut.score).toEqual(20)
    
   })



})