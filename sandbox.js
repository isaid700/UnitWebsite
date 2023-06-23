
    // JavaScript code for displaying the current time
    function displayTime() {
      var dateMin = new Date();
      var time = dateMin.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      document.getElementById("clock").innerHTML = time;
    }

    // Update the time every second
    setInterval(displayTime, 1000);
  

  // Make the button work
    // Conversion between cm and in
    function performConversion(value, sourceUnit, targetUnit) {
      var convertedValue;
      if (sourceUnit === "in" && targetUnit === "cm") { // in to cm
        convertedValue = value * 2.54;
      } else if (sourceUnit === "cm" && targetUnit === "in") { 
        convertedValue = value / 2.54;
      } else if (sourceUnit === "m" && targetUnit === "cm") { // cm and m
        convertedValue = value * 100.00;
      } else if (sourceUnit === "cm" && targetUnit === "m") {
        convertedValue = value / 100.0;
      } else if (sourceUnit === "m" && targetUnit === "in") { // in and m
        convertedValue = value * 39.37;
      } else if (sourceUnit === "in" && targetUnit === "m") {
        convertedValue = value / 39.37;
      } else if (sourceUnit === "km" && targetUnit === "m") { // km and m
        convertedValue = value * 1000.0;
      } else if (sourceUnit === "km" && targetUnit === "m") {
        convertedValue = value * 1000.0;
      } else if (sourceUnit === "cm" && targetUnit === "km") { // cm and km
        convertedValue = value / 100000.0;
      } else if (sourceUnit === "km" && targetUnit === "cm") {
        convertedValue = value * 100000.0;
      } else if (sourceUnit === "in" && targetUnit === "km") { //km and in
        convertedValue = value / 39370.0;
      } else if (sourceUnit === "km" && targetUnit === "in") {
        convertedValue = value * 39370.0;
      } else if (sourceUnit === "ft" && targetUnit === "in") { //ft and in
        convertedValue = value * 12.0;
      } else if (sourceUnit === "in" && targetUnit === "ft") {
        convertedValue = value / 12.0;
      } else if (sourceUnit === "ft" && targetUnit === "cm") { // cm and ft
        convertedValue = value * 30.48;
      } else if (sourceUnit === "cm" && targetUnit === "ft") {
        convertedValue = value / 30.48;
      } else if (sourceUnit === "m" && targetUnit === "ft") { // m and ft
        convertedValue = value * 3.281;
      } else if (sourceUnit === "ft" && targetUnit === "m") {
        convertedValue = value / 3.281;
      } else if (sourceUnit === "km" && targetUnit === "ft") { // m and ft
        convertedValue = value * 3280.84;
      } else if (sourceUnit === "ft" && targetUnit === "km") {
        convertedValue = value / 3280.84;
      } else {
        convertedValue = value;
      }

        return convertedValue.toFixed(2); // Return the converted value with 2 decimal places
      }

    // Function to handle conversion button click
    function handleConvert() {
      var input = document.getElementById("inputValue").value;
      var sourceUnit = document.getElementById("sourceUnit").value;
      var targetUnit = document.getElementById("targetUnit").value;

      // Perform the conversion
      var convertedValue = performConversion(parseFloat(input), sourceUnit, targetUnit);

      // Display the converted value
      document.getElementById("outputValue").value = convertedValue;
    }
  src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"
  src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"