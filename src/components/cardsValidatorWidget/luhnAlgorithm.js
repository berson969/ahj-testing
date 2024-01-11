export default function isValidLuhn(number) {
  if (typeof number === "string") {
    number = number.replace(/\s/g, "");
    if (parseInt(number)) {
      const checksum = parseInt(number.charAt(number.length - 1));
      let total = 0;

      for (let i = number.length - 2; i >= 0; i--) {
        let digit = parseInt(number.charAt(i));
        if (i % 2 === 0) {
          digit *= 2;
          digit = digit > 9 ? digit - 9 : digit;
        }
        total += digit;
      }

      return (total + checksum) % 10 === 0;
    }
  } else {
    return false;
  }
}
