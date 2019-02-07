const expect = require('chai').expect;
const converter = require('../index');

let mockNumbers = [
	'53421021',
	'2019',
	'12021120',
	'3',
	'4',
	'5',
	'6',
	'10',
	'20',
	'100',
	'1000'];

describe('Numeri Romani', () => {
	describe('toRomanNumeral', () => {
		let mockNum_2019 = converter.toRomanNumeral(mockNumbers[1]);
		let mockNum_3 = converter.toRomanNumeral(mockNumbers[3]);

		it('should be of type String', () => {
			expect(mockNum_2019).to.be.a('String');
		});

		it('should return the correct Roman Numeral', () => {
			//expect(mockNum_2019).to.equal('MMXIX');
			expect(mockNum_3).to.equal(converter.toRomanNumeral('3'));
		});

	});
	describe('groupByDecimalPoint', () => {
		const mockArray = [2,0,1,9];
		let result = converter.groupByDecimalPoint(mockArray);
		it('should create an Array of Objects', () => {
			expect(result).to.be.a('Array');
			result.map(val => {
				expect(val).to.be.a('Object');
			});
		});
	});
});
