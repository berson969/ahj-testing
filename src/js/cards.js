const cardsDict = {
  visa: {
    title: "Visa",
    startsWith: ["4"],
    length: {
      min: 13,
      max: 19,
    },
  },
  master: {
    title: "Mastercard",
    startsWith: ["51", "52", "53", "54", "55"],
    length: 16,
  },
  amex: {
    title: "American Express",
    startsWith: ["34", "37"],
    length: 15,
  },
  discover: {
    title: "Discover",
    startsWith: ["6011", "622", "644", "645", "646", "647", "648", "649", "65"],
    length: {
      min: 16,
      max: 19,
    },
  },
  jcb: {
    title: "JCB",
    startsWith: [
      "3528",
      "3529",
      "3530",
      "3531",
      "3532",
      "3533",
      "3534",
      "3535",
      "3536",
      "3537",
      "3538",
      "3539",
      "354",
      "355",
      "356",
      "357",
      "3589",
    ],
    length: {
      min: 16,
      max: 19,
    },
  },
  diners_club: {
    title: "Diners Club",
    startsWith: ["300", "301", "302", "303", "304", "305", "36", "54"],
    length: {
      min: 14,
      max: 16,
    },
  },
  mir: {
    title: "Mir",
    startsWith: ["22"],
    length: {
      min: 16,
      max: 19,
    },
  },
};

export default cardsDict;
