// https://eth-ropsten.alchemyapi.io/v2/TtXYhXyEgYlJ0NtDoM-iQ9JL67x1b9j4

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/TtXYhXyEgYlJ0NtDoM-iQ9JL67x1b9j4",
      accounts: [
        "e462d222a3d46d632a8170de22c65f182473dcda47152b13e4d9037664c4983a",
      ],
    },
  },
};
