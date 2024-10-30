import express from "express";
import Web3 from "web3";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

const web3 = new Web3("https://flashy-snowy-butterfly.quiknode.pro/42fd45c1e82f1d3132ebee9f06513052c7524e84/");

app.get("/general", async (req: any, res: any) => {
    async function fetchBlockNumber() {
        try {
            const currentBlockNumber = await web3.eth.getBlockNumber();
            const balance = await web3.eth.getBalance("0x9a97C932C686C65DcB817FD7032D2a1d4caF5f64");

            res.status(200).json({
                currentBlock: currentBlockNumber.toString(),
                balance: balance.toString()
            });
        } catch (error) {
            console.error('Error fetching block number:', error);
            res.status(500).json({ error: "An error occurred while fetching block number or balance" });
        }
    }

    fetchBlockNumber();
});

app.get("/get-metadata", async (req: any, res: any) => {
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
        const tokenUri: String = await nftContract.methods.tokenURI(tokenId).call();
        console.log(`Token URI: ${tokenUri}`);

        let metadataUri = tokenUri;
        if (tokenUri.startsWith('ipfs://')) {
            metadataUri = tokenUri.replace('ipfs://', 'https://ipfs.io/ipfs/');
        }

        if (typeof metadataUri === 'string') {
            const response = await axios.get(metadataUri);
            const metadata = response.data;
            console.log(metadata);
            res.status(200).json({
                metadata: metadata.attributes.toString()
            });
        } else {
            throw new Error('Invalid metadata URI');
        }

    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
            res.status(500).json({ error: error.message });
        } else {
            console.error('Unknown error', error);
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
