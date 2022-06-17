class BiteFish extends Fish {
    constructor(options) {
        super(options);
        this.imageUri = '/images/fish03.gif';
        this.maxSwimSpeed = 200
        this.surgeSecondsLeft = 0;
        this.maxSurge = 2.0
        this.surgMult - 3.5
    }

    updateOneTick() {
        var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
        this.position.addMut(delta);
        this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
        if (this.timeUntilSpeedChange < 0) {
          this.makeNewVelocity();
        }
      }

      eatfish(){
        if(this.position.addMut(delta) === this.go_fish.position(delta)){
          
        }
      }

      onClick(event) {
        this.surgeSecondsLeft = this.maxSurge;
      }



}