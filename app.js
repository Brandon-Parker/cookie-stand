var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var pikePlace = {
  store: 'Pike Place',
  minCustHr: 17,
  maxCustHr: 88,
  avgPerCust: 5.2,
  hourlySales: [],

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    for (var i = 0; i < hours.length; i++) {
      this.hourlySales.push(Math.floor(this.avgPerCust * this.calcRandCust()));
    }
  },
  makeList: function() {
    this.calcHourlySales();
    var ul = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourlySales[i];
      ul.appendChild(li);
    }
    document.body.appendChild(ul);
  }
};

pikePlace.calcHourlySales()
console.log(pikePlace.hourlySales)

// for (var i >= 0; i < pikePlace.hourlySales.length; i++) {
//   0[i]
// };

// console.log(pikePlace.calcRandCust(pikePlace.minCustHr, pikePlace.maxCustHr));
