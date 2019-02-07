const toRomanNumeral = (str) => {
	try {
		let strArr = str.split('');
		//let numArr = strArr.map(Number);
		let resultArr = [];
		let resultStr = '';
		let reversedArr = strArr.reverse();
		let groupedArr = groupByDecimalPoint(reversedArr);
		let	arrKeys = Object.keys(groupedArr);
		/* 	resultArr = groupedArr.map((numeral,index) => {
			switch(arrKeys){
				case 0:
					// Single Digit
					getSingleDigitNumeral(numeral[index]);
					break;
				default:
					break;
			}
    }); */

		resultArr = groupedArr.map((numeral, index) => {
			switch(index){
				case 0:
					return getSingleDigitNumeral(numeral[index]);
				case 1:
					// Get Tens Digit...
					return getSingleDigitNumeral(numeral[index]);
				case 2:
					// Get Hundreds Digit
					return getSingleDigitNumeral(numeral[index]);
				case 3:
					// Get Thousands Digit
					return getSingleDigitNumeral(numeral[index]);
			}
		});
		resultStr = resultArr.toString();
		return resultStr;

	} catch (err) {
		throw (`Couldn't convert ${str} into numeral`);
	}
};

const groupByDecimalPoint = (arr) => {
	let result = [];
	for (let i = 0; i < arr.length; i++){
		result.push({ [i]: arr[i] });
	}
	return result;
};

const getSingleDigitNumeral = (num) => {
	switch(num){
		case '0':
			return '';
		case '1':
			return 'I';
		case '2':
			return 'II';
		case '3':
			return 'III';
		case '4':
			return 'IV';
		case '5':
			return 'V';
		case '6':
			return 'VI';
		case '7':
			return 'VII';
		case '8':
			return 'VIII';
		case '9':
			return 'VIIII';
	}
};

module.exports = {
	toRomanNumeral,
	groupByDecimalPoint
};