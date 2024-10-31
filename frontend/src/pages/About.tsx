

import Prasad_pic from "../assets/Prasad_pic.png"
import Aadit_pic from "../assets/Aadit_pic.png"
import Aditya_pic from "../assets/Aditya_pic.jpeg"
import Navbar from "../components/Navbar"

function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-10">
        <h1 className="text-4xl text-center text-white mb-16 font-mono">Meet the Developers</h1>
        <div id="meet-us" className="flex flex-wrap justify-center gap-10">

          <div className="text-center bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-sm">
            <img 
              src={Prasad_pic} 
              alt="Prasad pic" 
              className="h-40 w-40 rounded-full object-cover mx-auto mb-5"
            />
            <h2 className="text-2xl text-white font-mono">Prasad</h2>
            <p className="text-white font-mono text-lg mt-2 mb-4">Full Stack Developer</p>
            <p className="text-white font-mono text-sm leading-relaxed">
              Prasad is a skilled Full Stack Developer and enjoys working on Node.js, React.js, PostgreSQL, MongoDB and many more technologies, with a strong passion for decentralized applications and scalable solutions.
            </p>
            <button 
              className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.open("https://www.linkedin.com/in/prasad-joshi-659896224/", "_blank")}
            >
              LinkedIn
            </button>
          </div>

          <div className="text-center bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-sm">
            <img 
              src={Aadit_pic} 
              alt="Aadit pic" 
              className="h-40 w-40 rounded-full object-cover mx-auto mb-5"
            />
            <h2 className="text-2xl text-white font-mono">Aadit</h2>
            <p className="text-white font-mono text-lg mt-2 mb-4">Frontend Developer</p>
            <p className="text-white font-mono text-sm leading-relaxed">
              Aadit is a talented Frontend Developer with expertise in React, JavaScript, and UI/UX design. He crafts responsive and intuitive UIs and has a keen interest in ML.
            </p>
            <button 
              className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.open("https://www.linkedin.com/in/aadit-palande-839a8b22a/", "_blank")}
            >
              LinkedIn
            </button>
          </div>

          <div className="text-center bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-sm">
            <img 
              src={Aditya_pic} 
              alt="Aditya pic" 
              className="h-40 w-40 rounded-full object-cover mx-auto mb-5"
            />
            <h2 className="text-2xl text-white font-mono">Aditya</h2>
            <p className="text-white font-mono text-lg mt-2 mb-4">Backend Developer</p>
            <p className="text-white font-mono text-sm leading-relaxed">
              Aditya is a seasoned Backend Developer focused on Node.js and RESTful APIs, skilled at designing robust architectures for complex applications.
            </p>
            <button 
              className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => window.open("https://www.linkedin.com/in/adityakode/?originalSubdomain=in", "_blank")}
            >
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
