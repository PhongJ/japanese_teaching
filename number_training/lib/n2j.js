function shouldHyphenate (n) {
  return n >= 20 && n <= 99;
};

const numbers = [
  {number: 1000000000000, text: ['兆', '一兆']},
  {number: 100000000, text: ['億', '一億']},
  {number: 10000, text: ['万', '一万']},
  {number: 1000, text: ['千']},
  {number: 100, text: ['百']},
  {number: 10, text: ['十']},
  {number: 9, text: ['九']},
  {number: 8, text: ['八']},
  {number: 7, text: ['七']},
  {number: 6, text: ['六']},
  {number: 5, text: ['五']},
  {number: 4, text: ['四']},
  {number: 3, text: ['三']},
  {number: 2, text: ['二']},
  {number: 1, text: ['一']},
  {number: 0, text: ['ゼロ']}
];

function numToWords (numToConvert) {
  let words = '';
  let prefixNum;
  let remainder;
  let closestSmallerNumber;
  let closestSmallerNumberText;

  numToConvert = parseInt(numToConvert, 10);

  if (isNaN(numToConvert)) {
    return 'not a number';
  }

  if (!isFinite(numToConvert)) {
    return 'infinity';
  }

  if (numToConvert < 0) {
    words += 'negative ';
    numToConvert *= -1;
  }

  for (const { number, text } of numbers) {
    if (numToConvert === number) {
      words += text[1] ? text[1] : text[0];
      return words;
    }

    if (numToConvert > number) {
      closestSmallerNumber = number;
      closestSmallerNumberText = text[0];
      break;
    }
  }

  prefixNum = Math.floor(numToConvert / closestSmallerNumber);

  if (prefixNum !== 1 || (prefixNum == 1 && closestSmallerNumber > 1999)) {

    words += numToWords(prefixNum) + '';
  }

  words += closestSmallerNumberText;

  remainder = numToConvert - prefixNum * closestSmallerNumber;
  if (remainder > 0 && shouldHyphenate(closestSmallerNumber)) {
    words += '-';
  } else {
    words += '';
  }

  if (remainder > 0) {
    words += numToWords(remainder);
  }

  return words.trim();
};