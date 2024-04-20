"use client";

export default function Home() {
  return (
    <main className='flex justify-center m-10 gap-20'>
      <div className="w-80 h-80 rounded-full overflow-hidden">
        <img src={"/profile-pic.png"} alt="Robel-img" />  
      </div>

      <div className="flex flex-col items-center justify-center font-serif">
        <div className="font-bold text-gray m-2 text-3x2">
          <p>Hello, I am</p>
        </div>
        <div className="font-bold text-black m-4 text-4xl">
          <h1>Robel Chane</h1>
        </div>
        <div className="font-bold text-gray-500 m-4 text-3xl">
          <p>Software Developer</p>
        </div>
        <button className="bg-gray-500 text-white p-4 rounded-full hover:bg-black text-3x2">
          <a href="/RobelChane_Resume.pdf" download>Download Resume</a>
        </button>
        <div className="flex gap-5 m-4 ">
          <img
            src="./linkedin.png"
            alt="My LinkedIn profile"
            onClick={() => window.location.href = 'https://linkedin.com/in/robel-chane-a1117a288/'}
            className="w-10 h-10 rounded-full overflow-hidden hover:bg-gray-500"
          />
          <img
            src="./github.png"
            alt="My Github profile"
            onClick={() => window.location.href = 'https://github.com/robelchane'}
            className="w-10 h-10 rounded-full overflow-hidden hover:bg-gray-500"
          />
        </div>
      </div>
    </main>
  );
}
