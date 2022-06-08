// ask the user to pick a choice (a b or c)
var input = parseInt(window.prompt("1 2 or 3?"))
// make the computer pick a choice
Math.floor(Math.random() * 3 + 1)
// compare the choices
// 1 beats 2, 2 beats 3, 3 beats 1
if(input === 1 && randomNumber === 2 || input === 2 && randomNumber === 3 || input === 3 && randomNumber === 1){
  console.log("Player wins!")
} else if(input === randomNumber) {
  console.log("DRAW")
} else {
  console.log("LOSE")
}
