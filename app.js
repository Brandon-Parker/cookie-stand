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
      this.hourlySales.push(hrly)
      this.dailyTotal += hrly;
    }
  },
  makeList: function() {
    this.calcHourlySales();
    var ulElem = document.createElement('ul');
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourlySales[i];
      ulElem.appendChild(li);
    }
    document.body.appendChild(ulElem);
    //Create an element
    //Add content to the element
    //append the element to the DOM
      // li.textContent = hrly[i] + ': ' + this.dailyTotal[i];
      // ulElem.appendChild(li);

  }
};

pikePlace.calcHourlySales()
console.log(pikePlace.hourlySales)

// for (var i >= 0; i < pikePlace.hourlySales.length; i++) {
//   0[i]
// };

// console.log(pikePlace.calcRandCust(pikePlace.minCustHr, pikePlace.maxCustHr));
