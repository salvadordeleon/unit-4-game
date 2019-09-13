$(document).ready(function(){
console.log("working")
var goal_num =50;

var wins =0;

var losses =0;

var currentTotal =0;

function display () {
    $("#random-number").text(goal_num)
    $("#userWins").text(wins)
    $("#userLosses").text(losses)
    $("#userTotal").text(currentTotal)
}
display()
});
// 
