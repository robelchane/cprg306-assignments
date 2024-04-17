import Link from "next/link"

export default function About() {
  return (
    <main className="flex flex-col items-center justify-center font-serif">
      <div className="font-bold text-gray-500 m-4 text-3xl">
        <p>Get To Know More</p>
      </div>
      <div className="font-bold text-black m-4 text-4xl">
        <p>About Me</p>
      </div>
      <div className="flex justify-center font-serif">
        <div className="w-1/3 m-10 ">
          <img src={"/about-pic.png"} alt="Profile picture" />
        </div>
        <div className="flex flex-col items-center w-1/2 m-10 mt-20">
          <div>
            <p className="font-bold text-gray-500 m-5 text-3xl">Education Background</p>
            <p className="font-bold text-black m-5 text-3xl">Software Developement</p>
            <p className="bg-gray-400 text-white flex justify-center p-3 m-5 rounded-full hover:bg-blue-500 text-3x2">
              <Link href="https://www.sait.ca">At SAIT</Link>
            </p>
          </div>
          <div className="m-10 text-xl">
            <p>Innovative software developer at SAIT College with a demonstrated record of creating complete
              flowcharts, layouts, and documentation to successfully detect problems and find resolutions
              easily. Outstanding in Python, C#, HTML, CSS, and JavaScript programming, getting
              extraordinary programming achievements. I’m eager to learn from others and willing to share my
              experiences. </p>
          </div>
        </div>
      </div>
    </main>
  );
}
