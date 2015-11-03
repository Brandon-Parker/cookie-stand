var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var pikePlace = {
  store: 'Pike Place',
  minCustHr: 17,
  maxCustHr: 88,
  avgPerCust: 5.2,
  hourlySales: [],
  dailyTotal: 0,

  calcRandCust: function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },
  calcHourlySales: function() {
    for (var i = 0; i < hours.length; i++) {
      var hrly = Math.floor(this.avgPerCust * this.calcRandCust());
      console.log('hourly total is ' + hrly);
      this.hourlySales.push(hrly)
      this.dailyTotal += hrly;
      console.log('running total is' + this.dailyTotal);
    }
  },
  makeList: function() {
    this.calcHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourlySales[i];
      pikeUl.appendChild(li);
    }
    var li = document.createElement('li');
      li.textContent = 'Daily Total: ' + this.dailyTotal;
      pikeUl.appendChild(li);
    //Create an element
    //Add content to the element
    //append the element to the DOM


  }
};

var pikeUl = document.getElementById('pike');
pikePlace.makeList()
// console.log(pikePlace.hourlySales)

// for (var i >= 0; i < pikePlace.hourlySales.length; i++) {
//   0[i]
// };

// console.log(pikePlace.calcRandCust(pikePlace.minCustHr, pikePlace.maxCustHr));
