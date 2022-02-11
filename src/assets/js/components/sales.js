var today = new Date();
var mm = String(today.getMonth() + 1).padStart(2, '0');

today = 30 + '.' + mm;

var date1 = document.getElementById('salesDate1');
var date2 = document.getElementById('salesDate2');
var date3 = document.getElementById('salesDate3');

date1.innerHTML = today;
date2.innerHTML = today;
date3.innerHTML = today;