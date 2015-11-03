var hours = ['', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
function CookieStand(storeLocations, minCustHr, maxCustHr, avgPerCust) {
  this.storeLocations = storeLocations;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgPerCust = avgPerCust;
  this.hourlySales = [];
  this.dailyTotal = 0;

  this.custCalc = function() {
    return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  };

  this.calcHourlySales = function() {
    for (var i = 0; i < hours.length; i++) {
      /*var hrly = Math.floor(this.avgPerCust * this.calcRandCust());*/
      this.hourlySales.push(Math.floor(this.avgPerCust * this.custCalc()));
      this.dailyTotal += this.hourlySales[i];
    }
  };

  this.displayData = function() {
    this.calcHourlySales();
    var heading = document.createElement('tr');
    var blank = document.createElement('td');
    blank.textContent = '';
    heading.appendChild(blank);

    for(var i = 0; i < hours.length; i++) {
      var storeHours = document.createElement('td');
      storeHours.textContent = hours[i];
      heading.appendChild(storeHours);
    };

    var row = document.createElement('tr');
    var location = document.createElement('th');
    location.textContent = this.storeLocations;
    row.appendChild(location);

    for(var i = 0; i < hours.length; i++){
      var numCookie = document.createElement('td');
      numCookie.textContent = this.hourlySales[i];
      row.appendChild(numCookie);
      tbl.appendChild(row);
    }
  }
};

var pikePlace = new CookieStand("Pike Place Market", 17, 88, 5.2);
var tbl = document.createElement('table');
pikePlace.displayData();


document.body.appendChild(tbl);




/*
var seaTac = {
  store: 'SeaTac Airport',
  minCustHr: 6,
  maxCustHr: 44,
  avgPerCust: 1.2,
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
      console.log('running total is ' + this.dailyTotal);
    }
  },
  makeList: function() {
    this.calcHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourlySales[i];
      seatacUl.appendChild(li);
    }
    var li = document.createElement('li');
      li.textContent = 'Daily Total: ' + this.dailyTotal;
      seatacUl.appendChild(li);
    }
  };

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var southCenter = {
  store: 'South Center Mall',
  minCustHr: 11,
  maxCustHr: 38,
  avgPerCust: 1.9,
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
      console.log('running total is ' + this.dailyTotal);
    }
  },
  makeList: function() {
    this.calcHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourlySales[i];
      southCenterUl.appendChild(li);
    }
    var li = document.createElement('li');
      li.textContent = 'Daily Total: ' + this.dailyTotal;
      southCenterUl.appendChild(li);
    }
  };

var bellevueSquare = {
  store: 'Bellevue Square Mall',
  minCustHr: 11,
  maxCustHr: 38,
  avgPerCust: 1.9,
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
      console.log('running total is ' + this.dailyTotal);
    }
  },
  makeList: function() {
    this.calcHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourlySales[i];
      bellevueSquareUl.appendChild(li);
    }
    var li = document.createElement('li');
      li.textContent = 'Daily Total: ' + this.dailyTotal;
      bellevueSquareUl.appendChild(li);
    }
  };

var alki = {
  store: 'Alki',
  minCustHr: 11,
  maxCustHr: 38,
  avgPerCust: 1.9,
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
      console.log('running total is ' + this.dailyTotal);
    }
  },
  makeList: function() {
    this.calcHourlySales();

    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      li.textContent = hours[i] + ': ' + this.hourlySales[i];
      alkiUl.appendChild(li);
    }
    var li = document.createElement('li');
      li.textContent = 'Daily Total: ' + this.dailyTotal;
      alkiUl.appendChild(li);
    }
  };*/

/*var pikeUl = document.getElementById('pike');*/
/*var seatacUl = document.getElementById('seatac');
var southCenterUl = document.getElementById('southCenter');
var bellevueSquareUl = document.getElementById('bellevueSquare');
var alkiUl = document.getElementById('alki');*/
/*pikePlace.makeList()*/
/*seaTac.makeList()
southCenter.makeList()
alki.makeList()
bellevueSquare.makeList()*/
