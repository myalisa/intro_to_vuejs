var app = new Vue({
  el: "#app",
  data: {
    message: "Guess!",
    answer: 24,
    guess: null,
  },
  methods: {
    checkGuess: function() {
      if (this.guess > this.answer) {
        this.message = ("Too High");
      } else if (this.guess < this.answer) {
        this.message = ("Too Low");
      } else {
        this.message = ("Just right");
      }
    },
    resetGame: function() {
      this.guess = null;
      this.message = "Play Again";
    }

  }
});