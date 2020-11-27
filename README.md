# random
Simple JavaScript Module to generate random Strings depending on crypto.randomBytes()

Use example:

  const randomString = require('./random');
  cosole.log(randomString());
  // Outputs an alphanumeric string with 32 characters

randomString([options]);

If called without options returns an 32 character alphanumeric string.

options = { type, length, special, charSet, upperCase }

type:
  'number' returns string of [0-9]
  'hex' returns hexadecimal String ([0-9a-f])
  'alphabetical' returns string of [a-z]
  'alphanumeric' returns string of [a-z0-9]
  'binary' returns binary String [0-1]
  'special' returns [0-9a-z] and special characters "!"#$%&'()*+,-./:;<=>?@[\]^_{|}~"

length: sets the length of the String

special: adds own string characters. If called with type: 'special' adds them to the type specified ones

charSet: if specified uses this char set to generate string. If called with type specified overwrites it.

upperCase:
  'with' adds uppercase letters of the existing letters in the charSet
  'only' replaces letters in charSet with the uppercase versions
