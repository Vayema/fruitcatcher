class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("𝕱RUIT 𝕮ATCHER!");
        this.title.position(300, 150);
        this.title.style('font-size', '90px');
        this.title.style('color', '#a3afe3');
        this.input.position(580,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(585,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', '#687dd9');
        this.reset.position(1000, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', '#3e4b83');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(450,250);
            this.greeting.style('color', '#dadff7');
            this.greeting.style('font-size', '90px');
        });

        this.reset.mousePressed(() => {

            game.update(0)
            player.updateCount(0)
            
            var playerInfoRef=database.ref('players')
            playerInfoRef.remove()

        });

    }
}

