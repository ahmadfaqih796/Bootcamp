var berat = document.getElementById("berat");
var tinggi = document.getElementById("tinggi");
var cekBtn = document.getElementById("cekBtn");
var beratBadan = 0;
var tinggiBadan = 0;

berat.addEventListener("change", function (e) {
    beratBadan = parseFloat(e.target.value);
});

tinggi.addEventListener("change", function (e) {
    tinggiBadan = parseFloat(e.target.value);
    console.log(tinggiBadan);
});
cekBtn.addEventListener("click", function (e) { 
    var BMI = beratBadan / (tinggiBadan * tinggiBadan);
    if (BMI < 18.5) {
        console.log("status berat anda underweight");   
    } 
    else if (BMI < 24.9) {
        console.log("status berat anda healty weight");   
    }
    else if (BMI < 29.9) {
        console.log("status berat anda overwigt");   
    }
    else {
        console.log("status berat anda obesitas");   
    }

});

