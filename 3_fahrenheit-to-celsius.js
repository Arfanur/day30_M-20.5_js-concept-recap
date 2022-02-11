function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

var fahrenheitTemperature = 98;
var celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
celsiusTemperature = celsiusTemperature.toFixed(1);
console.log(celsiusTemperature, 'C');