// RomanNumeralGenerator()
// For BBC TVMP application
// Richard Whittaker (richard@sblorgh.org/pkeruno@gmail.com)

function RomanNumeralGenerator() {
  
  this.generate = function(number) {
    var validationError = validateNumber(number); // Will return false if validation passed, error message otherwise.
    var translationArray; // Holds the reversed roman numeral translation
    var output; // Holds the final, translated string
    
    if(!validationError) {
		number = Math.floor(number); // Removes any decimals
		translationArray = runTranslators(number.toString());
		output = formatOutput(translationArray);
		return output;
    }
    else {
		return validationError;
    }
  };
  
  var validateNumber = function(input) { // Checks inputted variable to make sure it's a valid number
    if(isNaN(input) || input < 1 || input > 3999) {
		return "ERROR: Input is not a number between 1 and 3999";
    }
    else {
		return false;
    }
  };
  
  var runTranslators = function(input) { // Starts the translation process, assigning each digit of the input to its own translator
	var outputArray = [];
	
	for(var i = input.length, j = 1; i > 0; i--, j++) {
		outputArray[j-1] = goTranslate(input[i-1], j);
	}
	
	return outputArray;
  };
  
  var goTranslate = function(input, digit) { // Runs each digit's translator
	switch(digit) {
		case 1:	// Units
			return goTranslateUnits(input);
		case 2: // Tens
			return goTranslateTens(input);
		case 3: // Hundreds
			return goTranslateHundreds(input);
		case 4: // Thousands
			return goTranslateThousands(input);
	}
  };
  
  var goTranslateUnits = function(input) {
	switch(input) {
		case "1":
			return "I";
		case "2":
			return "II";
		case "3":
			return "III";
		case "4":
			return "IV";
		case "5":
			return "V";
		case "6":
			return "VI";
		case "7":
			return "VII";
		case "8":
			return "VIII";
		case "9":
			return "IX";
		default:
			return "";
	}	
  };
  
  var goTranslateTens = function(input) {
	switch(input) {
		case "1":
			return "X";
		case "2":
			return "XX";
		case "3":
			return "XXX";
		case "4":
			return "XL";
		case "5":
			return "L";
		case "6":
			return "LX";
		case "7":
			return "LXX";
		case "8":
			return "LXXX";
		case "9":
			return "XC";
		default:
			return "";
	}	
  };
  
  var goTranslateHundreds = function(input) {
	switch(input) {
		case "1":
			return "C";
		case "2":
			return "CC";
		case "3":
			return "CCC";
		case "4":
			return "CD";
		case "5":
			return "D";
		case "6":
			return "DC";
		case "7":
			return "DCC";
		case "8":
			return "DCCC";
		case "9":
			return "CM";
		default:
			return "";
	}	
  };
  
  var goTranslateThousands = function(input) {
	switch(input) {
		case "1":
			return "M";
		case "2":
			return "MM";
		case "3":
			return "MMM";
		default:
			return "";
	}	
  };
  
  var formatOutput = function(input) { // Takes reversed roman numeral array and turns it into the final string
	var formattedOutput = "";
	
	for(var i = input.length; i > 0; i--) {
		formattedOutput += input[i-1];
	}
	
	return formattedOutput;
  };
}