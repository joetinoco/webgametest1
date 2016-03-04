// PLAY SCENE
//
// Main game scene
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _die1Label: objects.Label;
        private _die2Label: objects.Label;

        private _die1Image: objects.Die;
        private _die2Image: objects.Die;

        private _rollButton: objects.Button;

        private _die1: string;
        private _die2: string;
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            
            // Startup die values
            this._die1 = "1";
            this._die2 = "1";
            
            // Add dice labels
            this._die1Label = new objects.Label(
                this._die1, "60px Consolas",
                "#000000",
                config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 50);
            this.addChild(this._die1Label);

            this._die2Label = new objects.Label(
                this._die2, "60px Consolas",
                "#000000",
                config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 50);
            this.addChild(this._die2Label);
            
            // Add dice images
            this._die1Image = new objects.Die(
                this._die1,
                config.Screen.CENTER_X - 150, config.Screen.CENTER_Y - 50);
            this.addChild(this._die1Image);

            this._die2Image = new objects.Die(
                this._die2,
                config.Screen.CENTER_X + 150, config.Screen.CENTER_Y - 50);
            this.addChild(this._die2Image);
            
            // Add roll button
            this._rollButton = new objects.Button(
                "RollButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 150);
            this.addChild(this._rollButton);
            
            // Roll button event listener
            this._rollButton.on("click", this._rollButtonClick, this);

            // Add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            
            // Redraw all elements
            this.removeAllChildren();     
            this.addChild(this._die1Label);
            this.addChild(this._die2Label);
            this.addChild(this._die1Image);
            this.addChild(this._die2Image);
            this.addChild(this._rollButton);
            
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        private _rollButtonClick(event: createjs.MouseEvent) {
            
            // Randomize the die results
            this._die1 = this.randomDieResult();
            this._die2 = this.randomDieResult();
            
            // Update dice images and labels according to the new values
            this._die1Label = new objects.Label(
                this._die1, "60px Consolas",
                "#000000",
                config.Screen.CENTER_X - 150, config.Screen.CENTER_Y + 50);

            this._die2Label = new objects.Label(
                this._die2, "60px Consolas",
                "#000000",
                config.Screen.CENTER_X + 150, config.Screen.CENTER_Y + 50);
            
            this._die1Image = new objects.Die(
                this._die1,
                config.Screen.CENTER_X - 150, config.Screen.CENTER_Y - 50);

            this._die2Image = new objects.Die(
                this._die2,
                config.Screen.CENTER_X + 150, config.Screen.CENTER_Y - 50);
           
        }
        
        // AUXILIARY FUNCTIONS ++++++++++++++++++++
        // Generates a random die result
        private randomDieResult(): string{            
            return Math.ceil(Math.random() * 6).toString();
        }

    }
}