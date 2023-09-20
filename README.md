Description

This repository contains a simple NFT minting smart contract and a deploy.js script to deploy the smart contract to the Ethereum blockchain.

Requirements

Node.js
MetaMask
Hardhat
Installation

Clone this repository:
git clone https://github.com/example/nft_minting_smartcontract.git
Install the dependencies:
cd nft_minting_smartcontract
npm install
Usage

To deploy the smart contract, run the following command:

node deploy.js
This will deploy the smart contract to the Ethereum blockchain and print the address of the contract to the console.

Once the smart contract is deployed, you can use it to mint NFTs by calling the mint() function. The mint() function takes two arguments: the address of the recipient and the amount of NFTs to mint.

To mint an NFT, you can use the following command:

node mint.js <recipient_address> <amount>
For example, to mint one NFT to the address 0x1234567890abcdef1234567890abcdef12345678, you would run the following command:

node mint.js 0x1234567890abcdef1234567890abcdef12345678 1
This will mint one NFT to the specified address and print the token ID of the NFT to the console.

License

This project is licensed under the MIT License.

Contact

If you have any questions or feedback, please feel free to contact me at [your email address].



