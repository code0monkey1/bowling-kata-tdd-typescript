import Game from "../src/Game";

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
     
      rollMany(20,0)
     

      expect(sut.score).toBe(0)

   })

   test("should score 20 for a set all ones ",()=>{

        // Arrange 
         const sut= game

        // Act
        rollMany(20,1)
       
        // Assert
        expect(sut.score).toEqual(20)
    
   })

   test("should score 12 for a spare and then for a 2 ponter extra",()=>{
      
       //Arrange
       const sut=game

       //Act
       rollMany(2,5)
       sut.roll(2)
       sut.roll(2)

       //Assert
       expect(sut.score).toBe(14)

   })



   const rollMany=(rolls:number,pins:number)=>{
   
    for(let i=0;i<rolls;i++){
        game.roll(pins)
    }
     
   }



})