//Clase
  function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPugins();
  }

  MediaPlayer.prototype._initPugins = function(){
      this.plugins.forEach(plugins => {
          plugins.run(this);
      });
  }

  // Metodo play
  MediaPlayer.prototype.play = function() {
    this.media.play();
  };

  MediaPlayer.prototype.pause = function() {
    this.media.pause();
  };

  MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  };

  MediaPlayer.prototype.mute = function(){
      this.media.muted = true;
  };

  MediaPlayer.prototype.unmute = function(){
      this.media.unmute = false;
  }


  export default MediaPlayer;