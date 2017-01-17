var player1 = "X";
var player2 = "O"
var isPlayingNow = player1;
var game = new TicTacToe();

window.onload = function () {
      
	document.getElementById("row1_col1").addEventListener("click", click);
	document.getElementById("row1_col2").addEventListener("click", click);
	document.getElementById("row1_col3").addEventListener("click", click);
	document.getElementById("row2_col1").addEventListener("click", click);
	document.getElementById("row2_col2").addEventListener("click", click);
	document.getElementById("row2_col3").addEventListener("click", click);
	document.getElementById("row3_col1").addEventListener("click", click);
	document.getElementById("row3_col2").addEventListener("click", click);
	document.getElementById("row3_col3").addEventListener("click", click);
	document.getElementById("reset").style.visibility = "hidden";
	document.getElementById("reset").addEventListener("click", reset);
}

function reset(){
	

	document.getElementById("row1_col1").innerHTML = "";
	document.getElementById("row1_col2").innerHTML = "";
	document.getElementById("row1_col3").innerHTML = "";
	document.getElementById("row2_col1").innerHTML = "";
	document.getElementById("row2_col2").innerHTML = "";
	document.getElementById("row2_col3").innerHTML = "";
	document.getElementById("row3_col1").innerHTML = "";
	document.getElementById("row3_col2").innerHTML = "";
	document.getElementById("row3_col3").innerHTML = "";

	game.end = false;
	game.reset();
	isPlayingNow = player1;
	document.getElementById("reset").style.visibility = "hidden";
	document.getElementById("status").style.visibility = "hidden";
	document.getElementById("isPlayingNow").innerHTML = isPlayingNow;

}

function click(event){

	if(!game.end){
		var source = (event.target || event.srcElement).id;
		
		var row = source.includes("row1")? 1: source.includes("row2")? 2: source.includes("row3")? 3 : NaN;
		var col = source.includes("col1")? 1: source.includes("col2")? 2: source.includes("col3")? 3: NaN;

		var isValidMove = game.put(isPlayingNow, row-1,col-1);

		if(isValidMove){
			document.getElementById(source).innerHTML = isPlayingNow;

			if(game.end){
				document.getElementById("status").innerHTML = "Player " + isPlayingNow + " win!";
				document.getElementById("status").style.visibility = "visible";
				document.getElementById("reset").style.visibility = "visible";
			}

			if(isPlayingNow == player1){
				setPlayer(player2);
			}else if(isPlayingNow == player2){
				setPlayer(player1);
			}

		}
	}
}

function setPlayer(player){
	document.getElementById("isPlayingNow").innerHTML = player;
	isPlayingNow = player;
}

function TicTacToe(){
	this.board = [["", "", ""],
				  ["", "", ""],
				  ["", "", ""]];
	this.end = false;
}


TicTacToe.prototype.put = function(player, row, col){
		if(this.board[row][col] == ""){
			this.board[row][col] = player;
			this.win();
			return true;
		}
		return false;
	}

TicTacToe.prototype.win = function(){
		
		for(i = 0; i < 3; i++){
			if(this.board[i][0] == this.board[i][1] 
			   && this.board[i][0] == this.board[i][2] 
			   && this.board[i][0] != ""){
				this.end = true;
			}
			if(this.board[0][i] == this.board[1][i]
			   && this.board[0][i] == this.board[2][i] 
			   && this.board[0][i] != ""){
				this.end = true;
			}
		}

		if((this.board[0][0] == this.board[1][1] 
			&& this.board[0][0]== this.board[2][2]
			&& this.board[0][0] != "")||
		   (this.board[2][0] == this.board[1][1] 
		   	&& this.board[2][0] == this.board[0][2] 
		   	&& this.board[2][0] != "")){
			this.end = true;
		}
	}

TicTacToe.prototype.reset = function(){
	this.board = [["", "", ""],
				  ["", "", ""],
				  ["", "", ""]];
}