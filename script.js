document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
  var temperature = parseFloat(document.getElementById('temperature').value);
  var fromUnit = document.getElementById('fromUnit').value;
  var toUnit = document.getElementById('toUnit').value;
  var result;

  if (isNaN(temperature)) {
    document.getElementById('result').innerText = 'Please enter a valid temperature.';
    return;
  }

  if (fromUnit === 'celsius') {
    if (toUnit === 'fahrenheit') {
      result = (temperature * 9/5) + 32;
    } else if (toUnit === 'kelvin') {
      result = temperature + 273.15;
    } else {
      result = temperature;
    }
  } else if (fromUnit === 'fahrenheit') {
    if (toUnit === 'celsius') {
      result = (temperature - 32) * 5/9;
    } else if (toUnit === 'kelvin') {
      result = (temperature - 32) * 5/9 + 273.15;
    } else {
      result = temperature;
    }
  } else if (fromUnit === 'kelvin') {
    if (toUnit === 'celsius') {
      result = temperature - 273.15;
    } else if (toUnit === 'fahrenheit') {
      result = (temperature - 273.15) * 9/5 + 32;
    } else {
      result = temperature;
    }
  }

  document.getElementById('result').innerText = result.toFixed(2) + ' ' + toUnit.charAt(0).toUpperCase() + toUnit.slice(1);
}