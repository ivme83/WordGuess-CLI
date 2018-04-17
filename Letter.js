var Letter = function(ch){
    this.character = ch;
    this.guessed = false;

    this.print = function(){
        var retStr = "";
        if (this.guessed === true){
            retStr = " " + this.character + " ";
            return retStr;
        } else {
            return " _ ";
        }
    }

    this.checkGuess = function(guess){
        if (this.guessed === false){
            if (this.character === guess){
                this.guessed = true;
            }
        }
    }

    this.getGuessed = function(){
        return this.guessed;
    }
}

module.exports = Letter;