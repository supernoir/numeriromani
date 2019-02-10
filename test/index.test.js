/**
 * Test Suite for Numeri Romani
 *
 * Other Sources: https://roman-numerals.info/MMXVIII
 * Wiki: https://en.wikipedia.org/wiki/Roman_numerals
*/

const expect = require('chai').expect;
const NumeriRomani = require('../index');

let converter = new NumeriRomani();

let mockNumbers = [
	'2018',
	'2019',
	'3',
	'4',
	'5',
	'6',
	'10',
	'20',
	'100',
	'3999'];

describe('Numeri Romani', () => {
	describe('toRomanNumeral', () => {
		let mockNum_2018 = converter.toRomanNumeral(mockNumbers[0]);
		let mockNum_2019 = converter.toRomanNumeral(mockNumbers[1]);
		let mockNum_3 = converter.toRomanNumeral(mockNumbers[2]);
		let mockNum_4 = converter.toRomanNumeral(mockNumbers[3]);
		let mockNum_5 = converter.toRomanNumeral(mockNumbers[4]);
		let mockNum_6 = converter.toRomanNumeral(mockNumbers[5]);
		let mockNum_10 = converter.toRomanNumeral(mockNumbers[6]);
		let mockNum_20 = converter.toRomanNumeral(mockNumbers[7]);
		let mockNum_100 = converter.toRomanNumeral(mockNumbers[8]);
		let mockNum_3999 = converter.toRomanNumeral(mockNumbers[9]);

		it('should be of type String', () => {
			expect(mockNum_2019).to.be.a('String');
		});

		it('should return the correct Roman Numeral', () => {
			expect(mockNum_3).to.equal(converter.toRomanNumeral('3'));
			expect(mockNum_3).to.equal('III');

			expect(mockNum_4).to.equal(converter.toRomanNumeral('4'));
			expect(mockNum_4).to.equal('IV');

			expect(mockNum_5).to.equal(converter.toRomanNumeral('5'));
			expect(mockNum_5).to.equal('V');

			expect(mockNum_6).to.equal(converter.toRomanNumeral('6'));
			expect(mockNum_6).to.equal('VI');

			expect(mockNum_10).to.equal(converter.toRomanNumeral('10'));
			expect(mockNum_10).to.equal('X');

			expect(mockNum_20).to.equal(converter.toRomanNumeral('20'));
			expect(mockNum_20).to.equal('XX');

			expect(mockNum_100).to.equal(converter.toRomanNumeral('100'));
			expect(mockNum_100).to.equal('C');

			expect(mockNum_2018).to.equal(converter.toRomanNumeral('2018'));
			expect(mockNum_2018).to.equal('MMXVIII');

			expect(mockNum_2019).to.equal(converter.toRomanNumeral('2019'));
			expect(mockNum_2019).to.equal('MMXIX');

			expect(mockNum_3999).to.equal(converter.toRomanNumeral('3999'));
			expect(mockNum_3999).to.equal('MMMCMXCIX');
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
