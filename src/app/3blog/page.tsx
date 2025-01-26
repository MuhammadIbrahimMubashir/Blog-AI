import React from 'react'
import Link from "next/link";

const Third = () => {
  return (
    <div className="h-full bg-indigo-500 text-center">
      <title>Why AI Was Invented</title>
      <h1 className="text-5xl text-emerald-600 pt-6 font-serif">
        Why AI Was Invented
      </h1>
      <br />
      <br />
      <br />
      <div className="text-xl">
        <p>
          Artificial Intelligence (AI) was invented to address the need for solving complex problems and automating tasks that require intelligence. The primary idea was to create machines that could think and learn and act like humans and enabling them to handle tasks that were too time-consuming and repetitive or difficult for humans. This invention aimed to improve efficiency and accuracy making processes faster and less prone to errors. For example AI can process large amounts of data in seconds something humans would take weeks or months to do manually.
        </p>
        <br />
        <p>
          Another reason for developing AI was to enhance decision-making. AI systems can analyze trends and identify patterns and provide insights and helping individuals and businesses and governments make smarter decisions. This ability is particularly useful in fields like healthcare where AI assists doctors in diagnosing diseases or in business where AI helps predict market trends. By offering data-driven solutions and AI reduces guesswork and improves outcomes.        
        </p>
        <br />
        <p>
          AI was also invented to mimic human intelligence and making interactions with machines more natural and seamless. Virtual assistants like Siri or Alexa are perfect examples of this and as they can understand and respond to human commands. Similarly AI-powered chatbots provide instant customer service making it easier for people to get help without waiting. This innovation has transformed how humans interact with technology making it more intuitive and accessible.      
        </p>
        <br />
        <p>
          Additionally AI was created to advance science and technology. It has become a powerful tool for researchers and helping them simulate experiments and explore new ideas and solve global challenges. From space exploration to renewable energy development, AI has become an essential component in driving innovation and shaping the future.
        </p>
        <br />
        <p>
        In summary, AI was invented to enhance human capabilities, automate processes, and solve problems more efficiently. Its purpose is to make life easier, improve decision-making, and enable breakthroughs in science and technology, ultimately transforming how we live and work.
        </p>
      </div>
      <Link href="/">
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:ease-in-out hover:duration-300 w-24 h-8 rounded-xl mt-[90] hover:bg-cyan-600 font-mono">HomePage</button>
      </Link>
      <br/>
      <p className="text-indigo-500">..</p>
    </div>
  )
}

export default Third
