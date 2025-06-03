import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="text-center bg-blue-500 text-white items-center flex justify-center text-5xl m-10 w-full h-30">
       <h1>MANOJ KUMAR</h1>
    </div>
    <div className="m-5">
      <p className="text-4xl ">Reva University </p>
      <p className="text-2xl">B.Tech in Artificial Intelligence & Machine Learning</p>
    </div>
    <div className="flex">
    <div className="w-150 h-50 overflow-scroll m-5 bg-sky-500 p-5">
      <p className="text-4xl ">About </p>
      <p className="text-2xl">providing software solutions that help businesses grow by integrating modern technologies like AI agents and full-stack systems.I focus on identifying real business challenges and delivering scalable, tech-driven solutions.
        Passionate about innovation, I work with companies to adopt emerging tools that drive efficiency, performance, and long-term growth.</p>
    </div>
    <div className="text-2xl m-10">
      <p className="text-4xl">Focuses</p>
      <ul>
        <li>AI AGENTS</li>
        <li>FULL STACK</li>
        <li>FRONTEND</li>
        <li>GENERATIVE ARTIFICIAL INTELLIGENCE</li>
      </ul>
    </div>
    </div>
    <div className="text-4xl m-5 bg-yellow">
      <p>I Provide Software Solutions to company with advanced technologies and latest trends in the market. I mainly focus on frontend developing UI applications as per the company requirements.</p>
    </div>
    <div className="display flex gap-20 m-5 items-center justify-center">
      <a href="https://www.linkedin.com/in/manoj-kumar-software-developer" >
        <img src="Images/icons8-linkedin-24.png" alt="" height={65} width={25} className=" transform hover:scale-110 rounded-lg shadow-lg" ></img>
      </a> 
      <a href="" >
        <img src="Images\icons8-leetcode-24.png" alt="" height={25} width={25} className="transform hover:scale-110" ></img>
      </a> 
       <a href="https://github.com/itsmanojkumar" >
        <img src="Images\icons8-github-48.png" alt="" height={25} width={25} className="transform hover:scale-110" ></img>
      </a> 
      
    </div>
    <div className="m-5 bg-gradient-to-r from-blue-500 via-purple-900 to-violet-500 text-white ">
      <p className="text-4xl ">Projects</p>
      <p className="text-2xl"></p>
      <ul>
        <li>GST Billing System</li>
        <p></p>
        <li>Health Dasboard</li>
        <p></p>
        <li><a href="">Hotel and Restaurant booking</a></li>
        <li><a href="">Crypto and weather Live</a></li>

      </ul>
    </div>
    <div className="bg-gradient-to-r from-black via-purple-900 to-violet-500">
      <p>HI</p>
    </div>
    <div>
      {/* <p> hi</p> */}
    </div>
    </>
  );
}   
