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
  return Math.floor(this.avgPerCust * this.calcRandCust());
  },
};
for (var i = 0; i < hours.length; i++) {
  pikePlace.hourlySales.push(pikePlace.calcHourlySales())
}


console.log(pikePlace.calcRandCust(pikePlace.minCustHr, pikePlace.maxCustHr));
