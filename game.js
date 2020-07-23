class game {

	constructor(){
		this.canvas = null;
		this.context = null;
		this.init();
	}

	init()
	{

		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = GAME_WIDTH;
		this.canvas.height = GAME_HEIGHT;
		document.body.appendChild(this.canvas);

		this.board = new board(this);

		this.brick = new brick(this);
		
		this.listenKeyBoard();
		
		this.startGame();

		this.loop();
	}

	startGame()
	{
		setInterval( ()=> {
			this.brick.fall();
		},500);
	}

	creatNewBrick()
	{
		this.brick = new brick(this);
	}

	listenKeyBoard()
	{
		document.addEventListener('keydown', (event) => {
			switch(event.code){
				case 'ArrowLeft' : this.brick.moveLeft(); break;
				case 'ArrowRight' : this.brick.moveRight(); break;
				case 'ArrowUp' :  this.brick.tranSlate() ;break;
				case 'ArrowDown' :this.brick.moveDown() ; break;
			}
		});
	}

	loop()
	{
		this.draw();
		setTimeout(()=>this.loop(),5);
	}

	clearScreen()
	{
		this.context.fillStyle='#ffffff';
		this.context.fillRect(0,0,GAME_WIDTH,GAME_HEIGHT);
	}

	draw()
	{
		this.clearScreen();
		this.board.draw();
		this.brick.draw();
	}

}

var g = new game();