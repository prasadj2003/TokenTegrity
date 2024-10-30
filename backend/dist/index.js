"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const web3_1 = __importDefault(require("web3"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const web3 = new web3_1.default("https://flashy-snowy-butterfly.quiknode.pro/42fd45c1e82f1d3132ebee9f06513052c7524e84/");
app.get("/general", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    function fetchBlockNumber() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const currentBlockNumber = yield web3.eth.getBlockNumber();
                const balance = yield web3.eth.getBalance("0x9a97C932C686C65DcB817FD7032D2a1d4caF5f64");
                res.status(200).json({
                    currentBlock: currentBlockNumber.toString(),
                    balance: balance.toString()
                });
            }
            catch (error) {
                console.error('Error fetching block number:', error);
                res.status(500).json({ error: "An error occurred while fetching block number or balance" });
            }
        });
    }
    fetchBlockNumber();
}));
app.get("/get-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const erc721Abi = [
        {
            constant: true,
            inputs: [{ name: '_tokenId', type: 'uint256' }],
            name: 'tokenURI',
            outputs: [{ name: '', type: 'string' }],
            type: 'function',
        },
    ];
    const contractAddress = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';
    const tokenId = 4824;
    const checksumAddress = web3.utils.toChecksumAddress(contractAddress);
    const nftContract = new web3.eth.Contract(erc721Abi, checksumAddress);
    try {
        const tokenUri = yield nftContract.methods.tokenURI(tokenId).call();
        console.log(`Token URI: ${tokenUri}`);
        let metadataUri = tokenUri;
        if (tokenUri.startsWith('ipfs://')) {
            metadataUri = tokenUri.replace('ipfs://', 'https://ipfs.io/ipfs/');
        }
        if (typeof metadataUri === 'string') {
            const response = yield axios_1.default.get(metadataUri);
            const metadata = response.data;
            console.log(metadata);
            res.status(200).json({
                metadata: metadata.attributes.toString()
            });
        }
        else {
            throw new Error('Invalid metadata URI');
        }
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
            res.status(500).json({ error: error.message });
        }
        else {
            console.error('Unknown error', error);
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}));
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
