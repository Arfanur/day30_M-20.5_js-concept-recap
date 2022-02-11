function celsiusToFahrenheit(celsius) {
    var fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

var celsiusTemperature = 37;
var fahrenheit = celsiusToFahrenheit(celsiusTemperature);
fahrenheit = fahrenheit.toFixed(1);
console.log(fahrenheit, 'F');