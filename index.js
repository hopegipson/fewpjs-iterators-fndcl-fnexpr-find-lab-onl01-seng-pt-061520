const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
 const winningYear = array.find( function(s) { return s.result === "W" })
  if (winningYear){
    return winningYear.year
  }

}
