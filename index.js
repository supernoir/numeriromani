
/**
 * Numeri Romani - generate
 * @version v.0.0.1
 * @description Converts a given number to a string of Roman Numerals
 * @param {String} num
 * @returns {String} resultStr
 * @author Conny Kawohl <kawohl@supernoir.io>
 */

class NumeriRomani {

	generate(num) {
		try {
			let resultArr = [];
			let resultStr = '';

			// Throws error if num length exceeds 4 digits
			if(num.length > 4){
				throw new Error('Cannot convert string with more than four digits (< 9999)');
			}

			// Enfore String type, split characters into Array
			let strArr = num.toString().split('');
			// Reverse Array for parsing digits from Ones to Thousands
			let reversedArr = strArr.reverse();
			// group numerals by location in digit
			let groupedArr = this.groupByDecimalPoint(reversedArr);

			// Iterate over Object of grouped numerals
			resultArr = groupedArr.map((numeral, index) => {
				switch(index){
					case 0:
						return this.getOnesAsNumeral(numeral[index]);
					case 1:
						return this.getTensAsNumeral(numeral[index]);
					case 2:
						return this.getHundredsAsNumeral(numeral[index]);
					case 3:
						return this.getThousandsAsNumeral(numeral[index]);
				}
			});

			// Reverse Array again and join to String
			let convertedArr = resultArr.reverse().join();
			// Replace commas
			resultStr = convertedArr.replace(/,/gi,'');
			return resultStr;

		} catch (err) {
			if (err !== void 0){
				throw err;
			} else {
				throw (`Couldn't convert ${num} into numeral`);
			}
		}
	};

	groupByDecimalPoint(arr) {
		let result = [];
		for (let i = 0; i < arr.length; i++){
			result.push({ [i]: arr[i] });
		}
		return result;
	};

	getOnesAsNumeral(num) {
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
				return 'IX';
		}
	};

	getTensAsNumeral(num) {
		switch(num){
			case '0':
				return '';
			case '1':
				return 'X';
			case '2':
				return 'XX';
			case '3':
				return 'XXX';
			case '4':
				return 'XL';
			case '5':
				return 'L';
			case '6':
				return 'LX';
			case '7':
				return 'LXX';
			case '8':
				return 'LXXX';
			case '9':
				return 'XC';
		}
	};

	getHundredsAsNumeral(num) {
		switch(num){
			case '0':
				return '';
			case '1':
				return 'C';
			case '2':
				return 'CC';
			case '3':
				return 'CCC';
			case '4':
				return 'CD';
			case '5':
				return 'D';
			case '6':
				return 'DC';
			case '7':
				return 'DCC';
			case '8':
				return 'DCCC';
			case '9':
				return 'CM';
		}
	};

	getThousandsAsNumeral(num) {
		switch(num){
			case '0':
				return '';
			case '1':
				return 'M';
			case '2':
				return 'MM';
			case '3':
				return 'MMM';
			case '4':
				return 'MMMM';
			case '5':
				return 'ↁ';
			case '6':
				return 'ↁM';
			case '7':
				return 'ↁMM';
			case '8':
				return 'ↁMM';
			case '9':
				return 'Mↂ';
		}
	};
}

module.exports = NumeriRomani;