
class dot {
	typeId;
	color;

	constructor(game,row,col)
	{
		this.game = game;
		this.size = 20;
		this.row  = row;
		this.col = col;
	}

	checkCol1()
	{
		if(this.col==0) return this.col==0;
	}

	checkCol2()
	{
		if(this.checkCol1()) return false;
		if(!this.game.board.checkEmptyCell(this.row,this.col-1)){
			return false;
		}
		return true;
	}


	moveLeft()
	{
		if(this.checkCol2()==true){
			this.col--;
		}
	}

	checkRow1()
	{
		if(this.col==NUM_COLS-1) return this.col==NUM_COLS-1;
	}
	checkRow2()
	{
		if(this.checkRow1()) return false;
		if(!this.game.board.checkEmptyCell(this.row,this.col+1)) return false;
		return true;
	}

	moveRight()
	{
		if(this.checkRow2()){
			this.col++;
		}
	}
	hitBottom()
	{
		if(this.row==NUM_ROWS-1) return this.row == NUM_ROWS - 1;
	}
	canFall()
	{
		if(this.hitBottom()) return false;
		if(!this.game.board.checkEmptyCell(this.row + 1 ,this.col ) ) {
			return false;
		}
			return true;
	}

	fall()
	{
		if(this.canFall()){
			this.row++;
		}
	}

	randomColors(noOfTypes)
	{
		 return Math.floor(Math.random() * noOfTypes + 1);
	}
	typeId =this.randomColors(COLORS.length - 1);
	color = COLORS[this.typeId];

	draw()
	{
		let x = this.col * this.size;
		let y = this.row * this.size;
		this.game.context.fillStyle = this.color;
		this.game.context.fillRect(x+1,y+1,this.size-2,this.size-2);
	}
}