/**
 * Accepts a binary string and returns the equivalent
 * decimal number.
 * @param {String} binary The binary string.
 * @return {Number} Decimal representation of the binary string.
 */
function convertBinaryToDecimal(binary) {
  let decimal = 0;
  for (
    let index = binary.length - 1, exponent = 0;
    index >= 0;
    index--, exponent++
  ) {
    const digit = parseInt(binary[index]);

    if (digit === 1) {
      decimal += Math.pow(2, exponent);
    }
  }
  return decimal;
}

export {convertBinaryToDecimal};
