var Letter = require("./Letter.js");

var Word = function(word){
    this.wordArray = [];
    this.word = word;

    this.createArray = function(){
        for (var i = 0; i < this.word.length; i++) {
            this.wordArray.push(new Letter(this.word.charAt(i)));
        }
    }

    this.printWord = function(){
        var prStr = "";
        for (var i = 0; i < this.wordArray.length; i++){
            prStr += this.wordArray[i].print();
        }
        return prStr;
    }

    this.guessLetter = function(ch){
        for (var i = 0; i < this.wordArray.length; i++){
            this.wordArray[i].checkGuess(ch);
        }
    }

    this.checkDone = function(){
        var falseCount = 0;
        for (var i = 0; i < this.wordArray.length; i++){
            var check = this.wordArray[i].getGuessed();
            if ( !(check)) {
                falseCount++;
            }
        }

        if (falseCount === 0){
            return true;
        } else {
            return false;
        }
    }

    this.createArray();
}

module.exports = Word;