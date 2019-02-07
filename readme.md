# Numeri Romani
## Converts a given string of numbers into roman numerals

### Using the Module in your Code
- Install the Module in your project root
  - With Yarn: `yarn add numeri-romani`
  - With NPM: `npm i --save numeri-romani`
- Import the module into your code
  - `const convert = require('numeri-romani')`
- Use the module to convert a string of Numbers (e.g. a given year)
  - `let currentYear = '2019';`
  - `console.log(convert.toRomanNumeral(currentYear));`
- Run your code to see the result
  - `$ => MMXIX`

### Current Gotchas
- Converting to Roman Numerals
- The input needs to be a string of numbers
- The numbers you wish to convert cannot exceed four digits

### Planned Features
- Convert Roman Numeral into Arabic numerals


### Contributing
- Run the unit tests
  - With Yarn: `yarn test`
  - With NPM: `npm test`