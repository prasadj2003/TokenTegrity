

import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import axios from "axios";

interface MetadataItem {
  trait_type: string;
  value: string;
}

function Landing() {
  const [imageData, setImageData] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<MetadataItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const bubbleRefs = Array.from({ length: 6 }, () => useRef(null));
  const backgroundRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, textRef.current],
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
    bubbleRefs.forEach((bubble, i) =>
      gsap.to(bubble.current, {
        y: i % 2 === 0 ? -20 : 20,
        duration: 4 + i * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    );
  }, []);

  const handleValidate = async (contractAddress: string, tokenId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/get-metadata", {
        params: { contractAddress, tokenId },
      });
      setImageData(response.data.image_url);
      setMetadata(response.data.metadata);
      setIsLoading(false);

      // Apply blur to the background only
      gsap.to(backgroundRef.current, { filter: "blur(8px)", duration: 1 });
    } catch (error) {
      console.error("Validation failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      {/* Background container for blur effect */}
      <div ref={backgroundRef} className="relative flex flex-col items-center justify-center min-h-screen px-10 pt-4">
        <div className="flex flex-col items-center w-full max-w-4xl text-center">
          <h1 ref={titleRef} className="text-9xl text-white font-mono mb-4">TokenTegrity</h1>
          <p ref={textRef} className="text-2xl text-white font-mono mb-8">
            TokenTegrity is a cutting-edge solution that streamlines the validation process of NFT metadata.
          </p>
          <Form onValidate={handleValidate} />
        </div>

        <div ref={bubbleRefs[0]} className="absolute left-5 top-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-40"></div>
        <div ref={bubbleRefs[1]} className="absolute left-5 top-1/3 w-24 h-24 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full opacity-40"></div>
        <div ref={bubbleRefs[2]} className="absolute left-5 top-1/2 w-28 h-28 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-40"></div>

        <div ref={bubbleRefs[3]} className="absolute right-5 top-1/4 w-40 h-40 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-40"></div>
        <div ref={bubbleRefs[4]} className="absolute right-5 top-1/3 w-28 h-28 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full opacity-40"></div>
        <div ref={bubbleRefs[5]} className="absolute right-5 top-1/2 w-28 h-28 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-full opacity-40"></div>
      </div>

      
      {isLoading ? (
        <p className="text-white mt-6">Validating...</p>
      ) : (
        imageData && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-4 bg-white rounded-lg shadow-lg max-w-xs text-center">
              <img src={imageData} alt="NFT" className="rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">NFT Metadata</h2>
              <ul>
                {metadata.map((attr, index) => (
                  <li key={index} className="text-gray-800">
                    {attr.trait_type}: {attr.value}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  setImageData(null);
                  gsap.to(backgroundRef.current, { filter: "blur(0px)", duration: 1 });
                }}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default Landing;

