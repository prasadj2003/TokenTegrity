import { useState } from "react";

import Input from "./Input";
import Button from "./Button";

// function Form() {
//   // State to hold contract address and token ID
//   const [contractAddress, setContractAddress] = useState("");
//   const [tokenId, setTokenId] = useState("");

//   // Function to handle validation
//   const handleValidate = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/get-metadata", {
//         params: {
//             contractAddress: contractAddress,
//             tokenId: tokenId,
//         }
//     },);
//       console.log("Validation Result:", response.data);
//     } catch (error) {
//       console.error("Error validating metadata:", error);
//     }
//   };

//   return (
//     <>
//       <Input
//         placeholder="NFT contract address"
//         onChange={(e: any) => setContractAddress(e.target.value)}
//       />
//       <Input
//         placeholder="NFT Token ID"
//         onChange={(e: any) => setTokenId(e.target.value)}
//       />
//       <Button onClick={handleValidate} />
//     </>
//   );
// }

// export default Form;


function Form({ onValidate }: any) {
  const [contractAddress, setContractAddress] = useState("");
  const [tokenId, setTokenId] = useState("");

  return (
    <>
      <Input placeholder="NFT Contract Address" onChange={(e: any) => setContractAddress(e.target.value)} />
      <Input placeholder="NFT Token ID" onChange={(e: any) => setTokenId(e.target.value)} />
      <Button onClick={() => onValidate(contractAddress, tokenId)}>Validate</Button>
    </>
  );
}

export default Form;