// ******************************
/// DEFINE YOUR STATE
// ******************************
var row1 = ["","",""];
var row2 = ["","",""];
var row3 = ["","",""];

var board = [
	row1,
	row2,
	row3
];

var isPlayerXTurn = true;  // true is X, false is O

// ******************************
// WRITE YOUR ACTIONS
// ******************************
function valueAtPosition(rowIndex, columnIndex) {
	// row is a number between 0 and 2
	// column is a number between 0 and 2
	var row = board[rowIndex];
	var value = row[columnIndex];
	return value;
}

function printBoard() {
	console.log(board[0]);
	console.log(board[1]);
	console.log(board[2]);
	console.log("***********************");
}


function setValueAtPosition(rowIndex, columnIndex) {
	if (isPlayerXTurn) {
		board[rowIndex][columnIndex] = "X";
	} else {
		board[rowIndex][columnIndex] = "O";
	}
	printBoard();
	isPlayerXTurn = !isPlayerXTurn;
}


function userInput() {
	var rowChoice = prompt("Enter a row");
	var columnChoice = prompt("Enter a column");

	if (valueAtPosition(rowChoice, columnChoice) == "") {
		setValueAtPosition(rowChoice, columnChoice);
	} else {
		alert("Invalid choice, dummy!");
	}	
}

function hasSomeoneWon() {
	var winConditions = [
		valueAtPosition(0,0) + valueAtPosition(0,1) + valueAtPosition(0,2), //row1
		valueAtPosition(1,0) + valueAtPosition(1,1) + valueAtPosition(1,2), //row2
		valueAtPosition(2,0) + valueAtPosition(2,1) + valueAtPosition(2,2), //row2

		valueAtPosition(0,0) + valueAtPosition(1,0) + valueAtPosition(2,0), //col1
		valueAtPosition(0,1) + valueAtPosition(1,1) + valueAtPosition(2,1), //col2
		valueAtPosition(0,2) + valueAtPosition(1,2) + valueAtPosition(2,2), //col3

		valueAtPosition(0,0) + valueAtPosition(1,1) + valueAtPosition(2,2), //diag1
		valueAtPosition(0,2) + valueAtPosition(1,1) + valueAtPosition(2,0)  //diag2

	];

	for (var i=0; i < 8; i++) {
		if (winConditions[i] == "XXX" || winConditions[i] == "OOO") {
			return true
		}
	}

	return false;
}

// ******************************
// KICK THE WHOLE THING OFF
// ******************************
while ( !hasSomeoneWon() ) {
	userInput();
}


var victor = "";

if (isPlayerXTurn) {
	victor = "O";
} else {
	victor = "X";
}


alert("victory! Player " + victor + " has won!");







