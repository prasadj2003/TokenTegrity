import Navbar from "../components/Navbar"
import { useEffect, useRef } from "react"
import gsap from "gsap"



function Landing() {
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const bubble1Ref = useRef(null)
  const bubble2Ref = useRef(null)
  const bubble3Ref = useRef(null)
  const bubble4Ref = useRef(null)
  const bubble5Ref = useRef(null)
  const bubble6Ref = useRef(null)

  useEffect(() => {
    // Animation for title and text
    gsap.fromTo(
      [titleRef.current, textRef.current],
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    )

    // Bubbles animation
    gsap.to(bubble1Ref.current, { y: -20, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" })
    gsap.to(bubble2Ref.current, { y: 20, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" })
    gsap.to(bubble3Ref.current, { y: -15, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" })
    gsap.to(bubble4Ref.current, { y: -15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" })
    gsap.to(bubble5Ref.current, { y: -15, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut" })
    gsap.to(bubble6Ref.current, { y: -15, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut" })
  }, [])

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-start min-h-screen px-10 pt-4">
        <div className="mt-4 w-full max-w-4xl text-center">
          <h1 ref={titleRef} className="text-9xl text-white font-mono mb-4">TokenTegrity</h1>
          <p ref={textRef} className="text-2xl text-white font-mono">
            TokenTegrity is a cutting-edge solution that streamlines the validation process of NFT metadata,
            ensuring accuracy, completeness, and consistency. Our platform leverages blockchain technology
            to provide a secure and reliable way to verify the authenticity of digital assets.
          </p>
        </div>

        {/* Decorative Bubbles */}
        <div ref={bubble1Ref} className="absolute top-1/4 right-20 w-40 h-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-40"></div>
        <div ref={bubble2Ref} className="absolute top-1/3 right-36 w-24 h-24 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full opacity-40"></div>
        <div ref={bubble3Ref} className="absolute top-1/2 right-10 w-28 h-28 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-40"></div>
        <div ref={bubble4Ref} className="absolute top-1/4 left-20 w-40 h-40 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-40"></div>
        <div ref={bubble5Ref} className="absolute top-1/3 left-5 w-28 h-28 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full opacity-40"></div>
        <div ref={bubble6Ref} className="absolute top-1/2 left-20 w-28 h-28 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-full opacity-40"></div>
      </div>

      
    </>
  )
}

export default Landing
