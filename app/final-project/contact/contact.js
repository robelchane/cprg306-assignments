"use client";

export default function Contact() {
  return (
    <main className="flex justify-center font-serif gap-20">
      <div>
        <div className="font-bold text-black m-5 text-3xl">
          <p>Contact Me</p>
        </div>
        <div className="flex justify-center font-bold text-gray-700  m-5 text-3xl">
          <p>Via</p>
        </div>
        <p>Email: robel.chane@edu.sait.ca</p>
        <p>Phone: +1(587) 834-5652</p>

        <div className="flex justify-center gap-5 m-4 ">
          <img
            src={"/linkedin.png"}
            alt="My LinkedIn profile"
            onClick={() => window.location.href = 'https://linkedin.com/in/robel-chane-a1117a288/'}
            className="w-10 h-10 rounded-full overflow-hidden hover:bg-gray-500"
          />
          <img
            src={"/github.png"}
            alt="My Github profile"
            onClick={() => window.location.href = 'https://github.com/robelchane'}
            className="w-10 h-10 rounded-full overflow-hidden hover:bg-gray-500"
          />
        </div>

      </div>
    </main>
    );
}
