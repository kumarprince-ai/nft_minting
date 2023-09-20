const Web3 = require("web3");
const { abi, evm } = require("./build/contracts/MyNFT.json"); // Contract ABI and Bytecode
const web3 = new Web3("http://localhost:8545"); // Connect to your local Ethereum node

const contractAddress = "<Your Contract Address>"; // Update with your deployed contract address
const accountAddress = "<Your Ethereum Account Address>"; // Update with your Ethereum account address
const privateKey = "<Your Ethereum Account Private Key>"; // Update with your Ethereum account private key

const contract = new web3.eth.Contract(abi, contractAddress);
web3.eth.accounts.wallet.add(privateKey);

const tokenId = 1; // Update with the token ID you want to mint
const toAddress = "<Recipient's Ethereum Address>"; // Update with the recipient's address

async function mintNFT() {
    try {
        const receipt = await contract.methods.mint(toAddress, tokenId).send({ from: accountAddress });
        console.log("Transaction receipt:", receipt);
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
}

mintNFT();
