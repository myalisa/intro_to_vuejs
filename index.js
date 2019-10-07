var app = new Vue({
  el: '#app',
  data: {
    message: "Hello Vue.js!",
    number1: 0,
    number2: 0,
    number3: 0,
    sum: 0,
    showInfo: false,
    movies: ["Up", "Titanic", "Step Up"]
  
  },
  methods: {
    calculateSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    toggleInfo: function() {
      this.showInfo = !this.showInfo;
      
    },
    addMovie: function() {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    }
  }
});